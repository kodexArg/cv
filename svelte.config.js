import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  compilerOptions: {
    discloseVersion: false
  },
  onwarn: (warning, handler) => {
    const { code, frame } = warning;
    if (code === 'css-unused-selector') return;
    if (code === 'a11y-no-noninteractive-element-to-interactive-role') return;
    
    handler(warning);
  },
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '',
    }
  }
};

export default config;

