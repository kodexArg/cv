// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// Two deploy targets from the same source:
// - GitHub Pages (default): https://kodexarg.github.io/cv/  → base /cv, outDir ./docs
// - Cloudflare Pages (CF_PAGES=1): https://cv.kodexarg.com/ → base /,  outDir ./dist-cf
const isCloudflare = !!process.env.CF_PAGES;

export default defineConfig({
  site: isCloudflare ? 'https://cv.kodexarg.com' : 'https://kodexarg.github.io',
  base: isCloudflare ? '/' : '/cv',
  outDir: isCloudflare ? './dist-cf' : './docs',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()]
  }
});
