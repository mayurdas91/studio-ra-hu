// @ts-check
import { defineConfig } from 'astro/config';

// The same code is deployed to several hosts:
// - GitHub Pages serves it under a sub-folder: https://mayurdas91.github.io/studio-ra-hu/
//   That build runs in GitHub Actions, which sets GITHUB_ACTIONS=true.
// - Netlify, Vercel and anything else serve it from the domain root.
// If you move GitHub Pages to a custom domain, change the Pages base to '/'.
const env = process.env;
const onGitHubPages = env.GITHUB_ACTIONS === 'true';

function siteUrl() {
  if (onGitHubPages) return 'https://mayurdas91.github.io';
  if (env.NETLIFY === 'true' && env.URL) return env.URL;
  if (env.VERCEL && env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return 'http://localhost:4321';
}

export default defineConfig({
  site: siteUrl(),
  base: onGitHubPages ? '/studio-ra-hu' : '/',
  trailingSlash: 'ignore',
});
