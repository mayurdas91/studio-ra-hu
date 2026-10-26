import type { NextConfig } from 'next';

// The same code is deployed to several hosts:
// - GitHub Pages serves it under a sub-folder: https://mayurdas91.github.io/studio-ra-hu/
//   That build runs in GitHub Actions, which sets GITHUB_ACTIONS=true.
// - Vercel, Netlify and anything else serve it from the domain root.
const onGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const config: NextConfig = {
  // Plain static files, so any host can serve it.
  output: 'export',
  basePath: onGitHubPages ? '/studio-ra-hu' : '',
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: onGitHubPages ? '/studio-ra-hu' : '',
  },
};

export default config;
