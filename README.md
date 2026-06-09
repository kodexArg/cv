# CV — Gabriel Cavedal

Single-page CV built with **Astro + Svelte 5 + Tailwind CSS v4**, statically
generated and deployed to GitHub Pages at <https://kodexarg.github.io/cv/>.

The whole interactive CV is a single Svelte island (`src/components/Cv.svelte`)
hydrated with `client:load`, so its shared stores (maximize / panel toggle)
behave exactly as in a normal Svelte app.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321/cv
```

## Build & deploy

```bash
npm run build    # outputs the static site into docs/
```

GitHub Pages serves the committed `docs/` directory on the `main` branch
(`site` + `base: /cv` in `astro.config.mjs`). Commit the regenerated `docs/`
after a build to publish.
