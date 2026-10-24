# ArchLingmo — site

Página do ArchLingmo, publicada pelo GitHub Pages: https://devalexandre.github.io/archlingmo/

O texto vem dos arquivos em `content/` e é montado no navegador; não há build.

| Arquivo | Seção |
|---|---|
| `content/site.json` | nome, frase, versão, link, torrent e tamanho da ISO, SHA-256, Discord, GitHub |
| `content/intro.md` | Sobre |
| `content/download.md` | Download e instalação pelo repositório |
| `content/requisitos.md` | Requisitos mínimos |
| `content/screenshots.md` | Capturas de tela (imagens em `screenshots/`) |
| `content/videos.md` | Vídeos: cada link do YouTube numa lista vira um player |
| `content/roadmap.md` | Roadmap: marque `- [x]` quando um item for entregue |
| `content/comunidade.md` | Comunidade |

Enquanto `iso.url` ou `discord` estiverem vazios, os botões mostram "em breve".

Para ver localmente (o navegador não lê os `.md` abrindo o arquivo direto):

```sh
python -m http.server 8000
# http://localhost:8000
```

## Visual e idiomas

A interface usa Inter, azul `#2779FF` e o material Vidro Lingmo: superfícies
translúcidas, bordas finas e luz no topo. O desktop do hero é HTML/CSS, com
barra, Ilha e dock; os ícones vêm do tema Lingmo. Há tema claro/escuro, preferência
salva no navegador e suporte a movimento reduzido e idiomas RTL.

`content/i18n/languages.json` lista os 48 idiomas. Cada pasta contém `ui.json` e
os textos traduzidos. As chaves novas têm tradução em pt_BR, en_US, es_ES,
fr_FR, de_DE, it_IT, zh_CN, ja_JP e ru_RU; nos demais idiomas usam inglês.
Conteúdo Markdown ausente cai para en_US e depois para o original em português.

## Blog de versões

As rotas `#/blog` e `#/blog/<slug>` funcionam diretamente no GitHub Pages.
Os originais ficam em `content/blog/<slug>.md`, com front matter entre `---`:
`title`, `date`, `codename`, `element`, `symbol`, `number`, `color`, `version`,
`status`, `cover`, `summary`. `status` é `current`, `upcoming` ou `past`.
Traduções ficam em `content/i18n/<idioma>/blog/<slug>.md`.

Depois de editar um post, execute `make` (Python 3, sem dependências). O script
`scripts/build-blog.py` valida os metadados, símbolo e número atômico e gera
`content/blog/index.json`, `feed.xml` (pt-BR) e `feed.en.xml` (inglês).
`make check` verifica se esses arquivos estão atualizados. Os arquivos gerados
precisam acompanhar os posts na publicação. Não há compilação do site.

O botão da ISO continua consultando o último release de
`devalexandre/archlingmo-archiso-config`; `content/site.json` é a alternativa
quando a API está indisponível. O release futuro no blog não altera esse download.

## Codinomes no desktop

O metapacote `lingmo-desktop` instala `/etc/lingmo-release`. Settings › Sobre
lê esse arquivo (com fallback para `/etc/os-release`) e desenha o selo em QML,
sem texto de versão gravado no SVG. Boas-vindas também mostra o codinome e o
link das novidades. `CODENAME_PT` e `CODENAME_EN` escolhem o nome por idioma;
`ELEMENT_SYMBOL`, `ELEMENT_NUMBER` e `BLOG_URL` completam a apresentação.
Para testar sem alterar `/etc`, use `LINGMO_RELEASE_FILE=/caminho/de/teste`.
Ao preparar uma versão, atualize os campos no `package()` do PKGBUILD, crie
seu post e ajuste os estados dos posts anteriores.
