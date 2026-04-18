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
  - Lede 18px var(--fg-dim), max-width 640px
  - Author row (avatar gradient + nome + descrição mono)
  - Post cover 16:9, max-width 1100px, radius 20px, border 1px
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

## Files bundled
- `Engineering Notes.html` — protótipo completo com 4 páginas (Home, Post, Archive, About) como rotas hash-based. No Jekyll cada uma vira layout/page separado.
- `styles.css` — todos os tokens e classes. Copiar para `_sass/` dividido em módulos.

## Implementation checklist (sugerida para Claude Code)

1. [ ] Fazer backup do estado atual em branch `legacy-horace`
2. [ ] Em novo branch, apagar `_sass/*.scss` e reescrever baseado em `styles.css`
3. [ ] Reescrever `_layouts/default.html` (nav + footer + theme init script)
4. [ ] Criar `_layouts/home.html`, `_layouts/post.html`, `_layouts/archive.html`, `_layouts/about.html`
5. [ ] Criar includes granulares (`featured-card`, `post-card`, `article-row`, `tag`, etc.)
6. [ ] Reescrever `index.html` usando os novos includes + iteração sobre `site.posts`
7. [ ] Adicionar `read_time` via plugin ou filtro Liquid (`page.content | number_of_words | divided_by: 200`)
8. [ ] Testar com `bundle exec jekyll serve` localmente
9. [ ] Verificar dark/light toggle persiste e não há FOUC
10. [ ] Publicar em branch `gh-pages`

## Notas finais
- O JS no protótipo roteia 4 páginas via hash num único arquivo — **não replicar isso no Jekyll**. Jekyll já gera páginas reais; cada "rota" do protótipo vira uma página/layout.
- O drop cap do About usa `::first-letter` — funciona direto em qualquer browser moderno.
- `font-variant-emoji: text` no nav garante que setas unicode `↗` renderizem como glifo, não emoji.
- O tema Horace antigo tinha sidebar off-canvas, Disqus, jQuery — **remover tudo**. Substituir Disqus por Giscus (GitHub-based) se quiser comentários.
