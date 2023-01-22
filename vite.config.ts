import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path'
const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib/'),
			$types: path.resolve('./types/'),
			$assetsServer: path.resolve('./src/lib/assets/')
		}
	}

};

export default config;
