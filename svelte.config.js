import adapter from '@sveltejs/adapter-static';
import preporcess from 'svelte-preprocess'

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preporcess({
    postcss: true
  }),
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

