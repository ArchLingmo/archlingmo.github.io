#!/usr/bin/env python3
"""Builds the blog's index and feeds from the Markdown posts. Plain Python 3, no packages.

    python3 scripts/build-blog.py          # write the files
    python3 scripts/build-blog.py --check  # exit 1 if they are out of date (for CI)

Reads
    content/blog/<slug>.md                  the post, in Brazilian Portuguese (the original)
    content/i18n/<lang>/blog/<slug>.md      its translations (only the front matter fields
                                            that change: title, element, summary)
    content/site.json                       "url": the site's public address, for the feeds
Writes
    content/blog/index.json                 the list app.js shows, newest first
    feed.xml                                Atom feed in Portuguese
    feed.en.xml                             Atom feed in English

Front matter (between two "---" lines, one "key: value" per line):
    title, date (YYYY-MM-DD), codename (English, lower case: the VERSION_CODENAME in
    /etc/lingmo-release), element (its name in the post's language), symbol, number,
    color, version, status (current | upcoming | past), cover (an image path), summary
The element's symbol and number are checked against the periodic table below.
"""
import json
import re
import sys
from datetime import datetime
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
POSTS = ROOT / "content" / "blog"
I18N = ROOT / "content" / "i18n"
INDEX = POSTS / "index.json"
DEFAULT_LANG = "pt_BR"
FEEDS = {"pt_BR": ("feed.xml", "ArchLingmo: Novidades", "pt-BR"),
         "en_US": ("feed.en.xml", "ArchLingmo: News", "en")}
REQUIRED = ["title", "date", "codename", "element", "symbol", "number", "version", "status", "cover", "summary"]
TRANSLATED = ["title", "element", "summary"]

# codename -> (symbol, atomic number); add the element before naming a release after it
ELEMENTS = {
    "hydrogen": ("H", 1), "helium": ("He", 2), "lithium": ("Li", 3), "beryllium": ("Be", 4),
    "boron": ("B", 5), "carbon": ("C", 6), "nitrogen": ("N", 7), "oxygen": ("O", 8),
    "fluorine": ("F", 9), "neon": ("Ne", 10), "sodium": ("Na", 11), "magnesium": ("Mg", 12),
    "aluminium": ("Al", 13), "silicon": ("Si", 14), "phosphorus": ("P", 15), "sulfur": ("S", 16),
    "chlorine": ("Cl", 17), "argon": ("Ar", 18), "potassium": ("K", 19), "calcium": ("Ca", 20),
    "titanium": ("Ti", 22), "iron": ("Fe", 26), "cobalt": ("Co", 27), "nickel": ("Ni", 28),
    "copper": ("Cu", 29), "zinc": ("Zn", 30), "gallium": ("Ga", 31), "germanium": ("Ge", 32),
    "krypton": ("Kr", 36), "silver": ("Ag", 47), "tin": ("Sn", 50), "xenon": ("Xe", 54),
    "platinum": ("Pt", 78), "gold": ("Au", 79),
}


def front_matter(path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"---\r?\n(.*?)\r?\n---\r?\n", text, re.S)
    if not match:
        sys.exit(f"{path}: no front matter")
    fields = {}
    for line in match.group(1).splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        key, sep, value = line.partition(":")
        if not sep:
            sys.exit(f"{path}: not a 'key: value' line: {line!r}")
        value = value.strip()
        if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
            value = value[1:-1]
        fields[key.strip()] = value
    return fields


def load_posts():
    posts = []
    for path in sorted(POSTS.glob("*.md")):
        slug = path.stem
        if not re.fullmatch(r"[a-z0-9-]+", slug):
            sys.exit(f"{path}: the file name is the URL; use a-z, 0-9 and -")
        meta = front_matter(path)
        missing = [k for k in REQUIRED if not meta.get(k)]
        if missing:
            sys.exit(f"{path}: missing {', '.join(missing)}")
        try:
            datetime.strptime(meta["date"], "%Y-%m-%d")
        except ValueError:
            sys.exit(f"{path}: date must be YYYY-MM-DD")
        expected = ELEMENTS.get(meta["codename"])
        if not expected:
            sys.exit(f"{path}: unknown element codename {meta['codename']!r} (add it to ELEMENTS)")
        if (meta["symbol"], int(meta["number"])) != expected:
            sys.exit(f"{path}: {meta['codename']} is {expected[0]} {expected[1]}, "
                     f"not {meta['symbol']} {meta['number']}")
        if meta["status"] not in ("current", "upcoming", "past"):
            sys.exit(f"{path}: status is current, upcoming or past")
        if not (ROOT / meta["cover"]).is_file():
            sys.exit(f"{path}: cover {meta['cover']} not found")

        i18n = {DEFAULT_LANG: {k: meta[k] for k in TRANSLATED}}
        for translated in sorted(I18N.glob(f"*/blog/{slug}.md")):
            lang = translated.parent.parent.name
            fields = front_matter(translated)
            i18n[lang] = {k: fields[k] for k in TRANSLATED if fields.get(k)}

        posts.append({
            "slug": slug,
            "date": meta["date"],
            "version": meta["version"],
            "status": meta["status"],
            "codename": meta["codename"],
            "symbol": meta["symbol"],
            "number": int(meta["number"]),
            "color": meta.get("color", "#2779FF"),
            "cover": meta["cover"],
            "i18n": i18n,
        })
    posts.sort(key=lambda p: (p["date"], p["number"]), reverse=True)
    if sum(p["status"] == "current" for p in posts) > 1:
        sys.exit("more than one post has status: current")
    return posts


def atom(posts, lang, site_url):
    file, title, xml_lang = FEEDS[lang]
    updated = max((p["date"] for p in posts), default="2026-01-01")
    entries = []
    for post in posts:
        text = {**post["i18n"][DEFAULT_LANG], **post["i18n"].get("en_US", {}), **post["i18n"].get(lang, {})} \
            if lang != DEFAULT_LANG else post["i18n"][DEFAULT_LANG]
        link = f"{site_url}?lang={lang}#/blog/{post['slug']}"
        entries.append(f"""  <entry>
    <title>{escape(text['title'])}</title>
    <id>{escape(site_url)}#/blog/{post['slug']}</id>
    <link rel="alternate" type="text/html" href="{escape(link)}"/>
    <published>{post['date']}T12:00:00Z</published>
    <updated>{post['date']}T12:00:00Z</updated>
    <category term="{escape(post['codename'])}" label="{escape(text['element'])} ({escape(post['symbol'])})"/>
    <summary>{escape(text['summary'])}</summary>
  </entry>""")
    return f"""<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="{xml_lang}">
  <title>{escape(title)}</title>
  <id>{escape(site_url)}{file}</id>
  <link rel="alternate" type="text/html" href="{escape(site_url)}?lang={lang}#/blog"/>
  <link rel="self" type="application/atom+xml" href="{escape(site_url)}{file}"/>
  <updated>{updated}T12:00:00Z</updated>
  <author><name>ArchLingmo</name></author>
  <icon>{escape(site_url)}assets/mark.svg</icon>
{chr(10).join(entries)}
</feed>
"""


def main():
    check = "--check" in sys.argv[1:]
    site = json.loads((ROOT / "content" / "site.json").read_text(encoding="utf-8"))
    site_url = site.get("url", "").rstrip("/") + "/"
    posts = load_posts()
    outputs = {INDEX: json.dumps({"posts": posts}, ensure_ascii=False, indent=1) + "\n"}
    for lang, (file, _, _) in FEEDS.items():
        outputs[ROOT / file] = atom(posts, lang, site_url)

    stale = [path for path, text in outputs.items()
             if not path.exists() or path.read_text(encoding="utf-8") != text]
    if check:
        for path in stale:
            print(f"out of date: {path.relative_to(ROOT)}")
        sys.exit(1 if stale else 0)
    for path in stale:
        path.write_text(outputs[path], encoding="utf-8")
        print(f"wrote {path.relative_to(ROOT)}")
    print(f"{len(posts)} posts" + ("" if stale else ", nothing to update"))


if __name__ == "__main__":
    main()
