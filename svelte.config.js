import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    discloseVersion: false
  },
  onwarn: (warning, handler) => {
    if (warning.code === 'css-unused-selector') return;
    if (warning.code === 'a11y-no-noninteractive-element-to-interactive-role') return;
    handler(warning);
  },
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    })
  }
};

export default config;
