// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		paths: {
			// base: "/audiophile",
			// assets: "https://tux-systems.co.uk/audiophile"
		},
		alias: { $types: path.resolve('./types/') },
		adapter: adapter()
	}
};

export default config;
