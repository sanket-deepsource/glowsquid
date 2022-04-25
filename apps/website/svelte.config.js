import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import Unocss from '@glow-ui/unocssPlugin.cjs';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  adapter: adapter(),
  vite: {
    plugins: [Unocss],
  },
};
export default config;
