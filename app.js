// Fills the page from content/site.json and the Markdown files in content/.
// Edit those files to change the text; the page itself needs no build step.
// Only the blog list and its feeds are generated: run `make` (scripts/build-blog.py)
// after adding or changing a post in content/blog/.
//
// Languages: content/*.md is the Brazilian Portuguese original. Other languages live
// in content/i18n/<code>/ (the same codes as the system's translations, e.g. en_US,
// zh_CN), with ui.json for the page's own words. A file missing in a language falls
// back to English, then to Portuguese. Blog posts work the same way:
// content/blog/<slug>.md, translated in content/i18n/<code>/blog/<slug>.md.
//
// Routes: #/blog is the list of posts, #/blog/<slug> one post; any other hash is
// an anchor on the home page.

const DEFAULT_LANG = "pt_BR";
const FALLBACK_LANG = "en_US";
let lang = DEFAULT_LANG;
let ui = {};
let blogIndex = null;
let sectionsReady = null;

async function fetchText(url) {
  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok)
    throw new Error(response.status);
  return response.text();
}

async function fetchJson(url) {
  try {
    return JSON.parse(await fetchText(url));
  } catch {
    return null;
  }
}

function t(key, values = {}) {
  let text = ui[key] ?? key;
  for (const [name, value] of Object.entries(values))
    text = text.replaceAll(`{${name}}`, value);
  return text;
}

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

function htmlLang() {
  return lang.replace("_", "-").replace(/-(AA|XX)$/, "");
}

// ---------- Light and dark ----------

const darkQuery = matchMedia("(prefers-color-scheme: dark)");

function isDark() {
  const chosen = document.documentElement.dataset.theme;
  return chosen ? chosen === "dark" : darkQuery.matches;
}

// Pictures with a light and a dark take (data-light / data-dark) follow the theme
function applyThemedImages() {
  const dark = isDark();
  for (const image of document.querySelectorAll("img[data-dark]")) {
    const wanted = dark ? image.dataset.dark : image.dataset.light;
    if (wanted && image.getAttribute("src") !== wanted)
      image.src = wanted;
  }
}

function setupTheme() {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    // Back to following the system when the choice matches it
    if ((next === "dark") === darkQuery.matches) {
      delete document.documentElement.dataset.theme;
      try { localStorage.removeItem("theme"); } catch {}
    } else {
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch {}
    }
    applyThemedImages();
  });
  darkQuery.addEventListener("change", applyThemedImages);
  applyThemedImages();
}

// ---------- Status bar bits ----------

function setupClock() {
  const clocks = [document.getElementById("clock"), document.getElementById("mock-clock")];
  const format = new Intl.DateTimeFormat(htmlLang(), { hour: "2-digit", minute: "2-digit" });
  const tick = () => {
    const now = new Date();
    for (const clock of clocks) {
      if (!clock)
        continue;
      clock.textContent = format.format(now);
      clock.dateTime = now.toISOString();
    }
  };
  tick();
  // Once a minute, on the minute: nothing repaints in between
  setTimeout(() => { tick(); setInterval(tick, 60000); }, 60000 - Date.now() % 60000);
}

function setupMenu() {
  const button = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");
  const close = () => {
    links.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  };
  button.addEventListener("click", event => {
    event.stopPropagation();
    const open = links.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", close);
  document.addEventListener("click", event => {
    if (!links.contains(event.target))
      close();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape")
      close();
  });
}

// ---------- Language ----------

// ?lang=, then the last choice, then the browser's languages (exact, then same base
// language), then English for everyone else
function pickLanguage(languages) {
  const codes = languages.map(l => l.code);
  const norm = code => code.replace("-", "_");
  const asked = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch {}
  for (const wanted of [asked, saved]) {
    if (wanted && codes.includes(norm(wanted)))
      return norm(wanted);
  }
  for (const browser of navigator.languages || [navigator.language]) {
    const code = norm(browser);
    const exact = codes.find(c => c.toLowerCase() === code.toLowerCase());
    if (exact)
      return exact;
    const base = code.split("_")[0].toLowerCase();
    const sameBase = codes.find(c => c.split("_")[0].toLowerCase() === base);
    if (sameBase)
      return sameBase;
  }
  return FALLBACK_LANG;
}

function translate(root = document) {
  for (const element of root.querySelectorAll("[data-i18n]"))
    element.textContent = t(element.dataset.i18n);
  for (const element of root.querySelectorAll("[data-i18n-html]"))
    element.innerHTML = t(element.dataset.i18nHtml);
  for (const element of root.querySelectorAll("[data-i18n-aria]"))
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
}

async function setupLanguage() {
  const languages = (await fetchJson("content/i18n/languages.json")) || [];
  lang = pickLanguage(languages);
  const info = languages.find(l => l.code === lang) || { dir: "ltr" };

  ui = Object.assign({},
    await fetchJson(`content/i18n/${DEFAULT_LANG}/ui.json`),
    lang !== DEFAULT_LANG ? await fetchJson(`content/i18n/${FALLBACK_LANG}/ui.json`) : null,
    await fetchJson(`content/i18n/${lang}/ui.json`));

  document.documentElement.lang = htmlLang();
  document.documentElement.dir = info.dir;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  translate();

  const select = document.getElementById("lang-select");
  select.setAttribute("aria-label", t("lang.label"));
  for (const language of languages) {
    const option = new Option(language.name, language.code, false, language.code === lang);
    select.add(option);
  }
  select.addEventListener("change", () => {
    try { localStorage.setItem("lang", select.value); } catch {}
    const url = new URL(location.href);
    url.searchParams.set("lang", select.value);
    location.href = url.toString();
  });

  // Portuguese readers get the Portuguese feed, everyone else the English one
  const feed = lang.startsWith("pt") ? "feed.xml" : "feed.en.xml";
  for (const link of document.querySelectorAll('#feed-link, .footer-feed'))
    link.href = feed;
}

// A file under content/ in the current language, falling back to English and then
// to the Portuguese original
async function fetchLocalized(file) {
  const relative = file.replace(/^content\//, "");
  const candidates = [];
  if (lang !== DEFAULT_LANG)
    candidates.push(`content/i18n/${lang}/${relative}`, `content/i18n/${FALLBACK_LANG}/${relative}`);
  candidates.push(file);
  for (const url of [...new Set(candidates)]) {
    try {
      return await fetchText(url);
    } catch {}
  }
  throw new Error("not found");
}

// ---------- Site config and the ISO ----------

async function loadConfig() {
  try {
    const response = await fetch("content/site.json", { cache: "no-cache" });
    return response.ok ? await response.json() : {};
  } catch {
    return {};
  }
}

// The ISO comes from the latest GitHub release of `config.releases`: a new
// release shows up here without touching the site. site.json's "iso" is the
// fallback (API down or rate-limited, no release yet).
async function latestIso(repo) {
  if (!repo)
    return null;
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`,
                                 { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok)
      return null;
    const release = await response.json();
    const asset = (release.assets || []).find(a => a.name.endsWith(".iso"));
    if (!asset)
      return null;
    const sha = (release.body || "").match(/\b[0-9a-f]{64}\b/i);
    const version = (asset.name.match(/(\d{4}\.\d{2}\.\d{2})/) || [])[1] || release.tag_name;
    const gb = asset.size / 1e9;
    return {
      version,
      iso: {
        url: asset.browser_download_url,
        size: gb >= 1 ? `${gb.toFixed(1).replace(".", ",")} GB` : `${Math.round(asset.size / 1e6)} MB`,
        sha256: sha ? sha[0].toLowerCase() : "",
        torrent: "",
      },
    };
  } catch {
    return null;
  }
}

function setLink(id, url, soonLabel) {
  const link = document.getElementById(id);
  if (!link)
    return;
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    link.classList.remove("soon");
  } else {
    // Not published yet: keep the button, say so
    link.removeAttribute("href");
    link.classList.add("soon");
    const label = link.querySelector("span[data-i18n], b") || link;
    label.textContent = soonLabel;
  }
}

function fillIsoMeta(element, config) {
  const iso = config.iso || {};
  const meta = [config.version && t("meta.version", { version: config.version }), iso.size, "x86-64"].filter(Boolean);
  element.textContent = meta.join(" · ");
  if (iso.torrent) {
    const torrent = document.createElement("a");
    torrent.href = iso.torrent;
    torrent.textContent = t("meta.torrent");
    element.append(" · ", torrent);
  }
  if (iso.sha256) {
    const sum = document.createElement("code");
    sum.textContent = `SHA-256 ${iso.sha256}`;
    element.append(document.createElement("br"), sum);
  }
}

function applyConfig(config) {
  if (config.name) {
    document.getElementById("site-name").textContent = config.name;
    document.getElementById("download-title").textContent = config.name;
  }

  const iso = config.iso || {};
  // the download buttons go to SourceForge (it counts the downloads); GitHub's release
  // still gives the version, size and checksum shown beside them
  const downloadUrl = config.downloadPage || iso.url;
  setLink("download-button", downloadUrl, t("soon.iso"));
  setLink("download-button-2", downloadUrl, t("soon.iso"));
  setLink("discord-button", config.discord, t("soon.discord"));
  if (config.github)
    setLink("github-button", config.github, "GitHub");

  fillIsoMeta(document.getElementById("iso-meta"), config);
  fillIsoMeta(document.getElementById("iso-meta-2"), config);
}

// ---------- Lightbox ----------

function openLightbox(src, alt, fallback) {
  const lightbox = document.getElementById("lightbox");
  const big = lightbox.querySelector("img");
  // The picture itself if the full-size one can't be loaded
  big.onerror = fallback ? () => { big.onerror = null; big.src = fallback; } : null;
  big.src = src;
  big.alt = alt || "";
  lightbox.showModal();
}

function setupLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.addEventListener("click", () => lightbox.close());
  // Pictures marked data-zoom open big; data-zoom="<url>" names a larger file
  document.addEventListener("click", event => {
    const image = event.target.closest("img[data-zoom]");
    if (image)
      openLightbox(image.dataset.zoom || image.currentSrc || image.src, image.alt);
  });
}

// ---------- Markdown sections ----------

// YouTube links in videos.md become embedded players
function youtubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function enhanceVideos(section) {
  const links = [...section.querySelectorAll("a")].filter(a => youtubeId(a.href));
  if (!links.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = t("videos.empty");
    section.append(empty);
    return;
  }
  const grid = document.createElement("div");
  grid.className = "video-grid";
  for (const link of links) {
    const figure = document.createElement("figure");
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${youtubeId(link.href)}`;
    frame.title = link.textContent;
    frame.loading = "lazy";
    frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    const caption = document.createElement("figcaption");
    caption.textContent = link.textContent;
    figure.append(frame, caption);
    grid.append(figure);
  }
  // The list the links came from is replaced by the players
  links[0].closest("ul, ol, p")?.replaceWith(grid);
}

// Images in screenshots.md become a mosaic that opens full size on click; the
// first nine show, the rest wait behind a button
const GALLERY_VISIBLE = 9;

function enhanceGallery(section) {
  const images = [...section.querySelectorAll("img")];
  if (!images.length)
    return;
  const grid = document.createElement("div");
  grid.className = "gallery-grid";
  images.forEach((image, index) => {
    const figure = document.createElement("figure");
    if (index >= GALLERY_VISIBLE)
      figure.className = "extra";
    const copy = image.cloneNode();
    copy.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = image.alt;
    figure.append(copy, caption);
    figure.addEventListener("click", () => openLightbox(image.src, image.alt));
    grid.append(figure);
  });
  images.forEach(image => image.closest("p")?.remove());
  section.append(grid);
  if (images.length > GALLERY_VISIBLE) {
    const more = document.createElement("div");
    more.className = "gallery-more";
    const button = document.createElement("button");
    button.className = "button subtle";
    button.type = "button";
    button.textContent = t("gallery.more", { count: images.length });
    button.addEventListener("click", () => {
      grid.classList.add("all");
      more.remove();
    });
    more.append(button);
    section.append(more);
  }
}

// Recursos: each item gets its icon and, for the eye-catching ones, a picture.
// content/features.json lists them group by group in the Markdown's order, so the
// translations only carry text. The first two groups show; the rest open on a click.
async function enhanceFeatures(section) {
  const map = await fetchJson("content/features.json");
  if (!map)
    return;
  section.querySelectorAll("ul").forEach((list, group) => {
    [...list.children].forEach((item, index) => {
      const feature = map.groups?.[group]?.[index];
      if (!feature)
        return;
      const text = document.createElement("div");
      text.className = "feature-text";
      text.append(...item.childNodes);

      const icon = document.createElement("span");
      icon.className = "feature-icon";
      icon.style.backgroundColor = feature.color || "var(--accent)";
      icon.style.setProperty("--icon", `url("assets/icons/${feature.icon}.svg")`);
      icon.setAttribute("aria-hidden", "true");

      const body = document.createElement("div");
      body.className = "feature-body";
      body.append(icon, text);

      item.classList.add("feature");
      if (feature.image) {
        const image = document.createElement("img");
        image.src = feature.image;
        image.alt = text.textContent.trim();
        image.loading = "lazy";
        image.className = "feature-image";
        image.addEventListener("click", () => openLightbox(feature.full || feature.image, image.alt, feature.image));
        item.classList.add("has-image");
        item.append(image);
      }
      item.append(body);
    });
  });

  const headings = [...section.querySelectorAll("h3")];
  if (headings.length > 2) {
    let node = headings[2];
    while (node) {
      node.classList.add("features-rest");
      node = node.nextElementSibling;
    }
    section.classList.add("collapsed");
    const more = document.createElement("div");
    more.className = "features-more";
    const button = document.createElement("button");
    button.className = "button subtle";
    button.type = "button";
    button.textContent = t("features.more");
    button.addEventListener("click", () => {
      section.classList.remove("collapsed");
      more.remove();
    });
    more.append(button);
    section.append(more);
  }
}

// Roadmap: every period (an h3 and its list) becomes a card
function enhanceRoadmap(section) {
  const headings = [...section.querySelectorAll("h3")];
  if (!headings.length)
    return;
  const phases = document.createElement("div");
  phases.className = "phases";
  headings[0].before(phases);
  for (const heading of headings) {
    const card = document.createElement("div");
    card.className = "card";
    const list = heading.nextElementSibling;
    card.append(heading);
    if (list && list.tagName === "UL")
      card.append(list);
    phases.append(card);
  }
}

async function loadSections() {
  for (const section of document.querySelectorAll("[data-md]")) {
    try {
      section.innerHTML = marked.parse(await fetchLocalized(section.dataset.md));
    } catch {
      section.innerHTML = `<p class="empty">${escapeHtml(t("load.error", { file: section.dataset.md }))}</p>`;
      continue;
    }
    if (section.classList.contains("gallery"))
      enhanceGallery(section);
    if (section.classList.contains("videos"))
      enhanceVideos(section);
    if (section.classList.contains("features"))
      await enhanceFeatures(section);
    if (section.classList.contains("roadmap"))
      enhanceRoadmap(section);
  }
}

// ---------- Blog ----------

// content/blog/index.json is written by scripts/build-blog.py
async function loadBlogIndex() {
  if (!blogIndex)
    blogIndex = (await fetchJson("content/blog/index.json")) || { posts: [] };
  return blogIndex;
}

// A post's words in the current language, then English, then Portuguese
function postText(post) {
  const texts = post.i18n || {};
  return { ...texts[DEFAULT_LANG], ...texts[FALLBACK_LANG], ...texts[lang] };
}

function formatDate(date) {
  try {
    return new Intl.DateTimeFormat(htmlLang(), { dateStyle: "long", timeZone: "UTC" })
      .format(new Date(`${date}T12:00:00Z`));
  } catch {
    return date;
  }
}

// A periodic table cell: atomic number, symbol, name
function elementTile(post, extraClass = "") {
  const text = postText(post);
  return `<span class="element ${extraClass}" style="--el:${escapeHtml(post.color || "#2779FF")}" role="img"
      aria-label="${escapeHtml(t("element.label", { name: text.element, number: post.number }))}">
    <span class="el-number" aria-hidden="true">${escapeHtml(post.number)}</span>
    <span class="el-symbol" aria-hidden="true">${escapeHtml(post.symbol)}</span>
    <span class="el-name" aria-hidden="true">${escapeHtml(text.element)}</span>
  </span>`;
}

function statusTag(post) {
  return post.status === "upcoming"
    ? `<span class="tag upcoming">${escapeHtml(t("blog.upcoming"))}</span>`
    : post.status === "current" ? `<span class="tag">${escapeHtml(t("blog.current"))}</span>` : "";
}

function postCard(post) {
  const text = postText(post);
  const card = document.createElement("a");
  card.className = "card post-card";
  card.href = `#/blog/${post.slug}`;
  card.innerHTML = `
    <div class="post-cover">
      <img src="${escapeHtml(post.cover)}" alt="" loading="lazy">
      ${elementTile(post)}
    </div>
    <div class="post-body">
      <div class="post-meta">${statusTag(post)}<time datetime="${escapeHtml(post.date)}">${escapeHtml(formatDate(post.date))}</time>
        <span>${escapeHtml(t("blog.version", { version: post.version }))}</span></div>
      <h3>${escapeHtml(text.title)}</h3>
      <p>${escapeHtml(text.summary)}</p>
    </div>`;
  return card;
}

async function renderHomeBlog() {
  const { posts } = await loadBlogIndex();
  const grid = document.getElementById("home-posts");
  grid.replaceChildren(...posts.slice(0, 3).map(postCard));
  if (!posts.length)
    grid.innerHTML = `<p class="empty">${escapeHtml(t("blog.empty"))}</p>`;

  // The next release (or else the current one) above the fold and in a banner
  const featured = posts.find(p => p.status === "upcoming") || posts.find(p => p.status === "current");
  if (!featured)
    return;
  const text = postText(featured);
  const name = `${text.element} (${featured.symbol})`;
  const pill = document.getElementById("release-pill");
  pill.href = `#/blog/${featured.slug}`;
  pill.innerHTML = `${elementTile(featured, "small")}
    <span>${escapeHtml(t(featured.status === "upcoming" ? "hero.next" : "hero.eyebrow", { name }))}</span>
    <span class="chevron" aria-hidden="true">›</span>`;
  pill.hidden = false;

  const banner = document.getElementById("release-banner");
  banner.innerHTML = `<a class="card" href="#/blog/${escapeHtml(featured.slug)}" style="--el:${escapeHtml(featured.color)}">
      ${elementTile(featured)}
      <div class="release-copy">
        <div class="post-meta">${statusTag(featured)}<span>${escapeHtml(t("blog.version", { version: featured.version }))}</span></div>
        <h2>${escapeHtml(t("release.cta", { name }))}</h2>
        <p>${escapeHtml(text.summary)}</p>
      </div>
      <span class="chevron" aria-hidden="true">›</span>
    </a>`;
  banner.hidden = false;
}

function stripFrontMatter(markdown) {
  return markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
}

async function renderBlog(slug) {
  const view = document.getElementById("blog-view");
  const { posts } = await loadBlogIndex();

  if (!slug) {
    document.title = `${t("blog.title")} · ArchLingmo`;
    view.innerHTML = `
      <header class="blog-head">
        <div><h1>${escapeHtml(t("blog.title"))}</h1><p>${escapeHtml(t("blog.lead"))}</p></div>
        <a class="button subtle" href="${lang.startsWith("pt") ? "feed.xml" : "feed.en.xml"}">${escapeHtml(t("blog.feed"))}</a>
      </header>
      <div class="post-grid"></div>`;
    const grid = view.querySelector(".post-grid");
    grid.append(...posts.map(postCard));
    if (!posts.length)
      grid.innerHTML = `<p class="empty">${escapeHtml(t("blog.empty"))}</p>`;
    return;
  }

  const post = posts.find(p => p.slug === slug);
  const back = `<a class="post-back" href="#/blog"><span class="arrow" aria-hidden="true">‹</span> ${escapeHtml(t("blog.back"))}</a>`;
  if (!post) {
    document.title = "ArchLingmo";
    view.innerHTML = `<article class="post">${back}<p class="empty">${escapeHtml(t("blog.notFound"))}</p></article>`;
    return;
  }
  const text = postText(post);
  document.title = `${text.title} · ArchLingmo`;
  let body = "";
  try {
    body = marked.parse(stripFrontMatter(await fetchLocalized(`content/blog/${post.slug}.md`)));
  } catch {
    body = `<p class="empty">${escapeHtml(t("load.error", { file: `content/blog/${post.slug}.md` }))}</p>`;
  }
  view.innerHTML = `
    <article class="post">
      ${back}
      <header class="post-hero">
        ${elementTile(post, "large")}
        <div>
          <div class="post-meta">${statusTag(post)}<time datetime="${escapeHtml(post.date)}">${escapeHtml(formatDate(post.date))}</time>
            <span>${escapeHtml(t("blog.version", { version: post.version }))}</span></div>
          <h1>${escapeHtml(text.title)}</h1>
        </div>
      </header>
      <figure class="post-figure"><img src="${escapeHtml(post.cover)}" alt="" data-zoom></figure>
      <div class="post-content prose">${body}</div>
    </article>
    <section class="post-more">
      <h2>${escapeHtml(t("blog.title"))}</h2>
      <div class="post-grid"></div>
    </section>`;
  for (const image of view.querySelectorAll(".post-content img"))
    image.dataset.zoom = "";
  view.querySelector(".post-more .post-grid").append(...posts.filter(p => p !== post).map(postCard));
  if (posts.length < 2)
    view.querySelector(".post-more").remove();
}

// ---------- Routing ----------

async function route() {
  const hash = decodeURIComponent(location.hash);
  const home = document.getElementById("home");
  const view = document.getElementById("blog-view");
  const blog = hash.match(/^#\/blog(?:\/([\w-]+))?\/?$/);
  for (const link of document.querySelectorAll('.links a[href="#/blog"]'))
    link.toggleAttribute("aria-current", !!blog);
  if (blog) {
    home.hidden = true;
    view.hidden = false;
    await renderBlog(blog[1]);
    window.scrollTo({ top: 0 });
    return;
  }
  document.title = document.getElementById("site-name").textContent || "ArchLingmo";
  const wasBlog = !view.hidden;
  view.hidden = true;
  home.hidden = false;
  // Sections load after the browser's own jump to #anchor: jump again once they're in
  if (hash.length > 1) {
    await sectionsReady;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  } else if (wasBlog) {
    window.scrollTo({ top: 0 });
  }
}

setupTheme();
setupMenu();
setupLightbox();
setupLanguage().then(() => {
  setupClock();
  loadConfig().then(async config => {
    applyConfig(config);
    // Then the newest release, if GitHub answers
    const latest = await latestIso(config.releases);
    if (latest)
      applyConfig({ ...config, ...latest });
  });
  sectionsReady = loadSections();
  renderHomeBlog();
  window.addEventListener("hashchange", route);
  route();
});
