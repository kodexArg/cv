// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// Deployed to GitHub Pages at https://kodexarg.github.io/cv/
export default defineConfig({
  site: 'https://kodexarg.github.io',
  base: '/cv',
  outDir: './docs',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()]
  }
});
