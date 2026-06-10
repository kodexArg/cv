# AGENTS.md

Single-page CV. Astro 6 shell, Svelte 5 components, Tailwind v4 via Vite plugin.

## Structure

```
src/
  pages/index.astro        # placeholder (coming soon)
  pages/full/index.astro   # full CV — passes base URL to Cv
  layouts/Layout.astro     # html shell, global styles
  components/Cv.svelte     # root component, layout (left-col / right-col)
  components/              # Avatar, Title, Contact, AboutMe, Skills, Work, Education, Projects, Footer
  lib/stores.js            # isMaximized, isLeftPanelVisible (Svelte writables)
  styles/global.css        # Tailwind base + custom utilities
public/                    # static assets (avatar, favicon)
docs/                      # build output → GitHub Pages
```

## Tooling

- Package manager: **bun** (not npm). Use `bun install`, `bun dev`, `bun run build`, `bun preview`.
- Lockfile: `bun.lock` (committed). No `package-lock.json`.

## Key facts

- `base` prop (`/cv`) must be threaded to any asset URL — use `{base}/asset.ext`.
- Tailwind v4: no `tailwind.config.*`, config is in CSS (`@theme`, `@utility`). Use `@reference '../styles/global.css'` inside component `<style lang="postcss">` blocks.
- Svelte 5 runes (`$props()`, `$state()`, `$derived()`). No legacy Options API.
- Two UI toggles: maximize (full-width) and picture toggle (hides left panel). Both driven by stores in `lib/stores.js`.
- Build target is `./docs` for GitHub Pages; `base: '/cv'` is set in `astro.config.mjs`.
- No backend, no content collections, no routing beyond the single index page.
