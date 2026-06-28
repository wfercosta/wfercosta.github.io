# Handoff: wfercosta.github.io Redesign — "Engineering Notes"

## Overview
Redesign do blog pessoal `wfercosta.com` (hospedado como GitHub Pages em `wfercosta/wfercosta.github.io`, branch `gh-pages`), inspirado no shot **"Bia Blog Page"** do Dribbble. Substitui o tema Jekyll "Horace" (2018, claro, verde) por um visual moderno dark-first com accent roxo, tipografia serif editorial no hero, e identidade voltada a engenharia de software.

## About the Design Files
Os arquivos deste pacote (`Engineering Notes.html` + `styles.css`) são **referências de design em HTML** — protótipos que mostram o visual e o comportamento pretendidos, **não código de produção para copiar literalmente**.

A tarefa é **recriar esses designs no stack existente do repositório (Jekyll / Liquid)**, seguindo a estrutura de `_layouts/`, `_includes/`, `_sass/` e `assets/` já presente. Não migrar para outro framework.

## Fidelity
**High-fidelity (hifi)**. Cores, tipografia, espaçamento, cantos, sombras, glow, e estados de hover estão finalizados. O dev deve reproduzir pixel a pixel usando as primitivas do Jekyll (partials, variáveis SASS, front matter).

## Target Stack
- **Jekyll** (já em uso no repo)
- **SASS** (já em `_sass/`)
- **Liquid** para templates
- Fontes via Google Fonts
- Sem JS framework — JS inline puro é suficiente (toggle de tema, scroll horizontal de categorias)

## Screens / Views

### 1. Home (`index.html` + `_layouts/default.html`)
**Purpose:** landing do blog. Mostra hero, pílulas de categoria, featured + lista, seções temáticas, changelog, "all categories", features bar.

**Layout (max-width 1240px, padding lateral 32px):**
- **Nav sticky** com blur: brand esquerda, links centro, theme toggle + "Subscribe" direita
- **Hero centralizado**, padding `120px 0 80px`, com glow roxo radial no topo (`radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.28), transparent 60%)`)
  - Kicker monospace `— Blog Articles —` em roxo, 11px, letter-spacing 0.22em
  - Título serif `Engineering` + itálico roxo `Notes` (`clamp(48px, 7vw, 88px)`, font-weight 400, line-height 1.02)
  - Subtítulo 16px `var(--fg-dim)`, max-width 520px
- **Categories strip:** scroll horizontal de cards (min-width 180px cada), botões prev/next circulares nas bordas, scrollbar escondida
- **Split grid assimétrico 1.35fr / 1fr:**
  - Esquerda: featured card grande (thumbnail 16:10 com badge `#42 · Featured`, tag colorida, título 24px, excerpt, meta)
  - Direita: lista vertical de 4 article-rows (thumb quadrada 120px + tag + título 15px + meta mono)
- **Card grids (3 col):** seções "Engineering & Architecture" e "Data & AI", cada card com aspect 16:10, tag, título, excerpt 2 linhas, meta
- **Panel "Changelog":** background `var(--bg-card)`, grid 1fr/1.4fr, lado esquerdo com avatares empilhados + título serif 40px + CTA "View all", lado direito com timeline de 4 linhas (número mono grande, tag, título, thumb 72×50)
- **Catalog grid (3 col):** cards simples com tag dot + nome + contagem mono à direita
- **Features bar:** 3 colunas (RSS, no newsletter, open source)
- **Footer:** grid 1.4fr/1fr/1fr/1fr — brand+desc, Site, Topics, Elsewhere — depois linha "legal" mono com copyright e versão

### 2. Post individual (`_layouts/post.html`)
- **Post hero centralizado** com mesmo glow roxo, padding 80px 0 40px
  - Linha meta mono: tag + data + read time
  - Título serif `clamp(40px, 5.5vw, 64px)`, max-width 820px
  - **Subtítulo (opcional)** serif *itálico* `clamp(22px, 3vw, 30px)`, `var(--fg-dim)`, max-width 720px — sentado entre título e lede. Só renderiza quando o post tem `subtitle` no front matter. Quando ausente, o título volta à margem padrão automaticamente (via `.post-title:has(+ .post-subtitle)`). É uma "segunda voz" do título, visualmente distinta do lede (serif italic vs sans).
  - Lede 18px var(--fg-dim), max-width 640px
  - Author row (avatar gradient + nome + descrição mono)
  - Post cover 16:9, max-width 1100px, radius 20px, border 1px

**Front matter do post (campos title/subtitle/lede):**
```yaml
---
layout: post
title: "Designing process platforms for long-running business workflows"
subtitle: "Why state machines beat microservices"   # OPCIONAL — omitir quando não houver
lede: "Notes from a year rebuilding a proposal-to-contract platform..."  # opcional
lang: en
ref: process-platforms
tags: [architecture]
---
```

**Template (`_layouts/post.html`) — renderização condicional:**
```liquid
<h1 class="post-title">{{ page.title }}</h1>
{% if page.subtitle %}
  <p class="post-subtitle">{{ page.subtitle }}</p>
{% endif %}
{% if page.lede %}
  <p class="post-lede">{{ page.lede }}</p>
{% endif %}
```

**CSS (já em `styles.css`):**
```css
.post-title:has(+ .post-subtitle) { margin-bottom: 12px; }
.post-subtitle {
  font-family: var(--font-serif);
  font-style: italic; font-weight: 400;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.2; letter-spacing: -0.01em;
  color: var(--fg-dim);
  max-width: 720px; margin: 0 auto 24px;
}
.post-subtitle + .post-lede { margin-top: 0; }
```
> i18n: para traduzir o subtítulo, use um campo por idioma no post traduzido (`_posts/pt-br/...`) — o `subtitle` vive no front matter de cada versão, não num data file.
- **Post body** (container-narrow, max 760px):
  - 17px / line-height 1.75
  - h2 serif 34px, h3 sans 20px 600
  - `code` inline com background var(--bg-card), border, radius 6px, mono 0.88em
  - `pre` com background var(--bg-card), border, radius 14px, padding 20px 24px
  - blockquote serif italic 26px, border-left roxo 2px
  - links roxo com underline suave
- **Post footer:** tags + share buttons circulares (Twitter, LinkedIn, Copy)
- **Read next:** card-grid de 3

### 3. Archive / Tags (`_layouts/page.html` variante)
- **Archive hero** com glow, kicker `— Archive —`, título serif "Everything, _sorted_"
- **Tag cloud:** pills com contador mono, estado active com `bg: var(--accent-soft)`, `border: var(--accent)`
- **Archive list:** linhas com grid `100px 80px 1fr 160px 160px 80px` — idx mono `#092`, thumb 64×64, título, tag, data, arrow button circular (hover vira roxo)
- Em mobile colapsa para `64px 1fr 40px`

### 4. About (`_layouts/page.html`)
- **About hero** com avatar circular 120px (gradient roxo + letra serif), kicker, título "Hi, I'm _Wander_"
- **About body** (container-narrow):
  - Primeiro parágrafo com `::first-letter` serif 72px roxo (drop cap)
  - 17px / line-height 1.7
- **Stats grid** 4 colunas (Notes / 15y / 75+ / BR), com números serif 40px e labels mono 11px uppercase
- **"Currently" card:** background var(--bg-card), radius 20px, padding 32px, título mono roxo uppercase, lista com bullets roxos glowing

## Design Tokens

### Colors — Dark (default)
| Token | Value |
|---|---|
| `--bg` | `#0a0a0c` |
| `--bg-elev` | `#111114` |
| `--bg-card` | `#13131a` |
| `--bg-card-hover` | `#1a1a23` |
| `--border` | `rgba(255,255,255,0.06)` |
| `--border-strong` | `rgba(255,255,255,0.1)` |
| `--fg` | `#ededf0` |
| `--fg-dim` | `#a1a1aa` |
| `--fg-mute` | `#6b6b78` |
| `--accent` | `#a78bfa` |
| `--accent-strong` | `#8b5cf6` |
| `--accent-soft` | `rgba(139,92,246,0.12)` |

### Colors — Light (toggle)
| Token | Value |
|---|---|
| `--bg` | `#fafaf7` |
| `--bg-elev` | `#ffffff` |
| `--bg-card` | `#ffffff` |
| `--bg-card-hover` | `#f5f5f0` |
| `--border` | `rgba(0,0,0,0.08)` |
| `--border-strong` | `rgba(0,0,0,0.14)` |
| `--fg` | `#18181b` |
| `--fg-dim` | `#52525b` |
| `--fg-mute` | `#8a8a93` |
| `--accent` | `#7c3aed` |
| `--accent-strong` | `#6d28d9` |

### Tag colors (por categoria)
| Categoria | Var | Hex |
|---|---|---|
| Engineering | `--tag-basics` | `#60a5fa` |
| Architecture | `--tag-health` | `#f87171` |
| Data Platform | `--tag-remedies` | `#c084fc` |
| DevOps | `--tag-resources` | `#fb923c` |
| AI & ML | `--tag-tech` | `#34d399` |
| Updates | `--tag-updates` | `#fbbf24` |

### Typography
- **Serif (títulos grandes):** `Instrument Serif`, weight 400, italic disponível
- **Sans (UI/corpo):** `Geist`, weights 400/500/600
- **Mono (meta, código, kickers):** `Geist Mono`, weights 400/500

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Spacing & radii
- Radii: `--radius-sm: 8px`, `--radius: 14px`, `--radius-lg: 20px`, `--radius-pill: 999px`
- Container: max 1240px, padding 32px lateral
- Container narrow (post body): max 760px
- Seções: `margin: 80px 0 24px` para section-head

### Glow
```css
--glow: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139, 92, 246, 0.28), transparent 60%);
--shadow-glow: 0 0 40px -8px rgba(139, 92, 246, 0.4);
```

## Interactions & Behavior
- **Theme toggle:** click no botão no nav alterna `[data-theme="dark"|"light"]` no `<html>`. Persiste em `localStorage.theme`. SSR-safe: ler em `<script>` inline no `<head>` antes do paint para evitar flash.
- **Categories scroll:** botões prev/next chamam `scrollBy({ left: ±300, behavior: 'smooth' })` no container
- **Card hover:** translateY(-2px), borda forte, background hover
- **Archive row hover:** background leve, arrow vira roxo com glow
- **Transições:** 0.2s ease em cor/border/transform

## Mapeamento para arquivos Jekyll existentes

Sua estrutura atual:
```
_config.yml
_layouts/{default,post,page}.html
_includes/{header,featuredbox,postbox,sidebar,...}.html
_sass/{_variables,_general,_header,...}.scss
assets/css/style.scss
assets/js/{custom,plugins,jquery}.js
index.html
```

**Plano de substituição:**

1. **`_sass/_variables.scss`** — sobrescrever completamente com os tokens CSS desta entrega. Converter para SASS vars ou manter como `:root` custom props (recomendo custom props para suportar o theme toggle).

2. **`_sass/*.scss`** — reescrever módulo por módulo usando `styles.css` como referência. Dividir em:
   - `_variables.scss` → tokens + tema light
   - `_reset.scss` → manter
   - `_general.scss` → body/tipografia/containers
   - `_header.scss` → nav sticky + brand + toggle
   - `_hero.scss` (novo) → hero + glow + categories strip
   - `_cards.scss` (novo) → card/featured/article-row
   - `_posts-pages.scss` → post hero + body + footer
   - `_archive.scss` (novo) → archive list + tag cloud
   - `_about.scss` (novo) → about hero + stats + currently
   - `_footer.scss` → footer grid

3. **`_layouts/default.html`** — nav + footer + theme-init script. Remover sidebar off-canvas, remover jQuery.

4. **`_layouts/post.html`** — rebuild seguindo a seção "Post individual" acima. Usar `page.featured_image`, `page.tags`, `page.date`, `page.read_time` (se ausente, calcular via filter Jekyll).

5. **`_layouts/page.html`** — layout genérico, usado por About e Archive.

6. **`_includes/header.html`** — nav completo com brand mark `wf`, links, theme toggle, Subscribe.

7. **Novos includes:**
   - `_includes/category-card.html` (param: icon, color, name, count)
   - `_includes/featured-card.html` (featured post grande)
   - `_includes/article-row.html` (linha lateral)
   - `_includes/post-card.html` (card do grid)
   - `_includes/tag.html` (param: category → class colorida)
   - `_includes/theme-toggle.html`

8. **`index.html`** — montar home com partials acima + iterar `site.posts`, agrupando por categoria/tag.

9. **`tags/index.html`** — virar Archive, renderizando `site.posts` em `.archive-list`.

10. **`about.md`** — substituir conteúdo por frente matter + layout `about` (ou reutilizar `page` com CSS extra).

11. **`assets/js/custom.js`** — simplificar. Deletar jQuery e plugins. Manter só: theme toggle + categories scroll + (opcional) copy-link compartilhamento.

12. **`_config.yml`** — trocar `name`, `description`, remover referências ao tema Horace no footer.

## State Management
Nenhum state complexo. Apenas:
- `localStorage.theme` (`"dark" | "light"`)
- Scroll position do `.categories` (efêmero)

## Assets
- **Fontes:** Google Fonts (Instrument Serif, Geist, Geist Mono) — carregar via `<link>` no layout default
- **Placeholders:** os cards usam `.placeholder` com gradients listrados por categoria. Substituir por `page.featured_image` real conforme posts forem publicados.
- **Logo:** no mock é um quadrado `wf` com gradient roxo. Seu logo atual está em `assets/images/logo.png` — opcional manter via `{% if site.logo %}`.
- **Favicon:** manter `assets/images/favicon.ico`.

## Multi-idioma (i18n): pt-BR + en-US

O protótipo já demonstra a troca de idioma (toggle `EN · PT` no nav). Abaixo, a arquitetura recomendada para implementar de verdade no Jekyll.

### ⚠️ Constraint do GitHub Pages
O plugin padrão de i18n (`jekyll-polyglot`) **NÃO está na whitelist do GitHub Pages**. Duas opções:
- **(A) Buildar via GitHub Actions** (recomendado) — roda `jekyll build` num workflow e publica `_site/`. Libera qualquer plugin, incl. polyglot. Caminho moderno.
- **(B) Manual sem plugin** — funciona no GH Pages nativo, mais trabalho de manutenção (subpastas `/pt-br/` + data files + seleção manual de posts por `page.lang`).

Assumindo **(A) + jekyll-polyglot**:

### Estrutura de arquivos
```
_config.yml
_data/i18n/
  en.yml          # strings de UI em inglês
  pt-br.yml       # strings de UI em português
_posts/
  en/2026-04-14-process-platforms.md
  pt-br/2026-04-14-plataformas-processo.md
.github/workflows/build.yml   # jekyll build + deploy (opção A)
```

### `_config.yml`
```yaml
languages: ["en", "pt-br"]
default_lang: "en"
exclude_from_localization: ["assets", "css", "js", "images", "fonts"]
parallel_localization: true
```
Gera: `wfercosta.com/` (EN, default sem prefixo) e `wfercosta.com/pt-br/` (PT).
> Se o público é majoritariamente BR, inverta `default_lang: "pt-br"`.

### UI strings em data files
Toda string de interface sai de `_data/i18n/<lang>.yml`. Exemplo (`pt-br.yml`):
```yaml
nav: { articles: "Artigos", archive: "Arquivo", about: "Sobre", subscribe: "Inscrever-se" }
hero:
  kicker: "— Artigos do Blog —"
  title_1: "Notas de"          # parte normal
  title_2: "Engenharia"        # parte em itálico/accent (<em>)
  sub: "Textos sobre engenharia de software, arquitetura, plataformas de dados, DevOps..."
sections: { eng_arch: "Engenharia & Arquitetura", data_ai: "Dados & IA", all_categories: "Todas as Categorias" }
read_all: "Ver todos →"
read_next: "Leia a seguir"
share: "Compartilhar"
read_time_suffix: "min de leitura"
footer: { site: "Site", topics: "Tópicos", elsewhere: "Em outros lugares", rss: "Feed RSS" }
```
No template:
```liquid
{% assign t = site.data.i18n[page.lang] %}
<a href="{{ '/archive' | relative_url }}">{{ t.nav.archive }}</a>
<h1 class="hero-title">{{ t.hero.title_1 }} <em>{{ t.hero.title_2 }}</em></h1>
```

### Categorias/tags: slug estável, label traduzido
**Crítico para não quebrar o CSS.** As classes de cor (`.tag.architecture`, `.tag.data`, etc.) usam o **slug em inglês**. Só o rótulo visível traduz. Mapeie no data file:
```yaml
# pt-br.yml
tags:
  engineering: "Engenharia"
  architecture: "Arquitetura"
  data: "Plataforma de Dados"
  devops: "DevOps"
  ml: "IA & ML"
  updates: "Novidades"
  process: "Processo"
```
```liquid
{% comment %} include _includes/tag.html com param `slug` {% endcomment %}
<span class="tag {{ include.slug }}">{{ site.data.i18n[page.lang].tags[include.slug] }}</span>
```
Nos posts, use sempre o slug em inglês no front matter (`tags: [architecture]`), nunca o label traduzido.

### Posts traduzidos + `ref`
Cada post tem `lang` e um `ref` compartilhado entre traduções:
```yaml
# _posts/en/2026-04-14-process-platforms.md
---
layout: post
title: "Designing process platforms for long-running business workflows"
lang: en
ref: process-platforms
tags: [architecture]
featured: true
featured_image: /assets/images/posts/process-platforms.jpg
---
```
```yaml
# _posts/pt-br/2026-04-14-plataformas-processo.md
---
layout: post
title: "Projetando plataformas de processo para fluxos de longa duração"
lang: pt-br
ref: process-platforms
tags: [architecture]
featured: true
featured_image: /assets/images/posts/process-platforms.jpg
---
```
O `ref` permite que, **dentro de um post**, o language toggle leve à tradução equivalente (não à home). Polyglot expõe isso via `post.ref`.

### Language toggle no nav (substitui o JS do protótipo)
No protótipo o toggle troca strings via JS. **No Jekyll, cada idioma é uma página real** — o toggle vira links. Adicionar ao lado do `theme-toggle`, herdando os tokens `.lang-toggle`/`.lang-opt` (já no `styles.css`):
```liquid
<div class="lang-toggle">
  {% for lang in site.languages %}
    {% if page.ref and page.collection == 'posts' %}
      {% assign target = site.posts | where: "ref", page.ref | where: "lang", lang | first %}
      {% assign href = target.url %}
    {% else %}
      {% assign href = page.url %}
      {% unless lang == site.default_lang %}{% assign href = '/' | append: lang | append: page.url %}{% endunless %}
    {% endif %}
    <a class="lang-opt {% if lang == page.lang %}active{% endif %}" href="{{ href | relative_url }}">{{ lang | replace: 'pt-br','PT' | replace: 'en','EN' | upcase }}</a>
  {% endfor %}
</div>
```

### `<html lang>` + hreflang (SEO)
```liquid
<html lang="{{ page.lang | default: site.default_lang | replace: 'pt-br','pt-BR' }}" data-theme="dark">
```
No `<head>`, para cada idioma:
```liquid
{% for lang in site.languages %}
  <link rel="alternate" hreflang="{{ lang }}" href="{{ ... }}" />
{% endfor %}
```

### Datas por locale
O protótipo reformata datas via JS (`toPt()`: "April 14, 2026" → "14 de abril de 2026", "min read" → "min de leitura"). No Jekyll, prefira formatar no build conforme `page.lang`:
```liquid
{% assign t = site.data.i18n[page.lang] %}
{% if page.lang == 'pt-br' %}
  {{ post.date | date: '%-d de ' }}{{ t.months[post.date | date: '%-m'] }}{{ post.date | date: ' de %Y' }}
{% else %}
  {{ post.date | date: '%B %-d, %Y' }}
{% endif %}
```
(defina `months:` no data file PT, indexado por número do mês). Para o read-time, anexe `t.read_time_suffix`.

### Decisões de conteúdo
| Questão | Recomendação |
|---|---|
| Post existe só num idioma | Polyglot faz fallback pro default; mostre badge "Only in English" ou esconda do feed do outro idioma |
| URL default | EN sem prefixo (`/`) p/ alcance internacional; ou inverta se público é BR |
| Tags/categorias | slug EN estável (CSS); label traduzido via data file |
| Strings de UI | 100% nos data files — zero string hard-coded em template |

### O que muda no design já entregue
1. **Nav:** o `.lang-toggle` (EN/PT) já existe no protótipo e CSS — no Jekyll vira links com `page.ref`.
2. **Todas as strings de UI** migram para `_data/i18n/{en,pt-br}.yml`.
3. **`.tag` classes** continuam com slug EN; só o label muda.
4. **Posts** duplicados em `_posts/en/` e `_posts/pt-br/` com `ref` compartilhado.
5. **CSS:** nenhuma mudança estrutural — `.lang-toggle`/`.lang-opt` já estão no `styles.css`.

---

## Files bundled
- `Engineering Notes.html` — protótipo completo com 4 páginas (Home, Post, Archive, About) como rotas hash-based + toggle de idioma EN/PT (via atributos `data-pt` + JS). No Jekyll cada página vira layout/page separado e o i18n vira data files + polyglot.
- `styles.css` — todos os tokens e classes. Copiar para `_sass/` dividido em módulos.

## Implementation checklist (sugerida para Claude Code)

1. [ ] Fazer backup do estado atual em branch `legacy-horace`
2. [ ] Em novo branch, apagar `_sass/*.scss` e reescrever baseado em `styles.css`
3. [ ] Reescrever `_layouts/default.html` (nav + footer + theme init script)
4. [ ] Criar `_layouts/home.html`, `_layouts/post.html`, `_layouts/archive.html`, `_layouts/about.html`
5. [ ] Criar includes granulares (`featured-card`, `post-card`, `article-row`, `tag`, etc.)
6. [ ] Reescrever `index.html` usando os novos includes + iteração sobre `site.posts`
7. [ ] Adicionar `read_time` via plugin ou filtro Liquid (`page.content | number_of_words | divided_by: 200`)
8. [ ] **i18n:** adicionar `languages`/`default_lang` no `_config.yml`, criar `_data/i18n/{en,pt-br}.yml`, mover strings de UI para lá
9. [ ] **i18n:** estruturar `_posts/en/` + `_posts/pt-br/` com `ref` compartilhado; language toggle via `page.ref`
10. [ ] **i18n:** configurar GitHub Actions (`jekyll build` + deploy) para liberar `jekyll-polyglot`
11. [ ] Adicionar `read_time` via filtro Liquid (`page.content | number_of_words | divided_by: 200`)
12. [ ] Testar com `bundle exec jekyll serve` localmente (incl. `/` e `/pt-br/`)
13. [ ] Verificar dark/light toggle persiste e não há FOUC; `<html lang>` + hreflang corretos
14. [ ] Publicar (via Actions na branch de deploy)

## Notas finais
- O JS no protótipo roteia 4 páginas via hash num único arquivo — **não replicar isso no Jekyll**. Jekyll já gera páginas reais; cada "rota" do protótipo vira uma página/layout.
- O drop cap do About usa `::first-letter` — funciona direto em qualquer browser moderno.
- `font-variant-emoji: text` no nav garante que setas unicode `↗` renderizem como glifo, não emoji.
- O tema Horace antigo tinha sidebar off-canvas, Disqus, jQuery — **remover tudo**. Substituir Disqus por Giscus (GitHub-based) se quiser comentários.
