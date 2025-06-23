import adapter from '@sveltejs/adapter-static';
import preporcess from 'svelte-preprocess'

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preporcess({
    postcss: true
  }),
  compilerOptions: {
    discloseVersion: false
  },
  onwarn: (warning, handler) => {
    // Suprimir advertencias específicas
    if (warning.code === 'a11y-click-events-have-key-events' || 
        warning.code === 'a11y-no-static-element-interactions' ||
        warning.code === 'element-invalid-self-closing-tag' ||
        warning.code === 'element_invalid_self_closing_tag') {
      return;
    }
    handler(warning);
  },
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: undefined,
      precompress: false,
      strict: true
    }),
    paths: {
      base: dev ? '' : '',
    }
  }
};

export default config;

