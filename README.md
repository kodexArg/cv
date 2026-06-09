# CV — Gabriel Cavedal

Single-page CV built with SvelteKit + Tailwind CSS, statically prerendered and
deployed to GitHub Pages at <https://kodexarg.github.io/cv/>.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy

```bash
npm run build    # outputs the static site into docs/
```

GitHub Pages serves the committed `docs/` directory on the `main` branch.
Commit the regenerated `docs/` after a build to publish.
