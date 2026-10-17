// @ts-check
import { defineConfig } from 'astro/config';

// The site is deployed to two hosts:
// - Netlify serves it from the domain root (https://studiorahu.netlify.app/).
//   Netlify sets NETLIFY=true and URL=<primary site URL> during builds.
// - GitHub Pages serves this repo at https://mayurdas91.github.io/studio-ra-hu/
// If you move to a custom domain (e.g. studiorahu.com), set `site` to that
// domain and change `base` to '/'.
const onNetlify = process.env.NETLIFY === 'true';

export default defineConfig({
  site: onNetlify ? process.env.URL : 'https://mayurdas91.github.io',
  base: onNetlify ? '/' : '/studio-ra-hu',
  trailingSlash: 'ignore',
});
