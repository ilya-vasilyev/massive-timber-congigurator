import App from '@/App.vue';
import { ViteSSG } from 'vite-ssg';

import '@/styles/index.css';
import { ViteSetupModule } from './types/ViteSetupModule';
import { extendedRoutes } from '@/router';

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/oswald/600.css";

export const createApp = ViteSSG(
	App,
	{ routes: extendedRoutes },
	async ctx => {
		Object.values(
			import.meta.glob<{ install: ViteSetupModule }>('./modules/*.ts', {
				eager: true,
			})
		).map(i => i.install?.(ctx));
	},
	{}
);
