// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		adapter: adapter({
			pages: "docs",
			assets: "docs",
			strict: false
		}),
		paths: {
			base: dev ? "" : "/kodexArg/cv",
		},
	},
	reprocess: vitePreprocess()
};

export default config;