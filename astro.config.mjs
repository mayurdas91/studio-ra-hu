// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo at https://mayurdas91.github.io/studio-ra-hu/
// If you move to a custom domain (e.g. studiorahu.com), set `site` to that
// domain and change `base` to '/'.
export default defineConfig({
  site: 'https://mayurdas91.github.io',
  base: '/studio-ra-hu',
  trailingSlash: 'ignore',
});
