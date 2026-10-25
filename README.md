# Studio Ra Hu

Portfolio site for Studio Ra Hu, built with [Astro](https://astro.build) and deployed to GitHub Pages.

Live at: https://mayurdas91.github.io/studio-ra-hu/

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # outputs to dist/
```

## Where things live

| What | Where |
| --- | --- |
| Case studies (one Markdown file each) | `src/content/work/` |
| Case study images and client logos | `src/assets/work/` |
| Services, process steps, form email | `src/data/site.ts` |
| Colours, fonts, animations | `src/styles/global.css` |
| Pages | `src/pages/` |

## Adding or editing a case study

1. Copy any file in `src/content/work/` and rename it. The file name becomes the URL.
2. Fill in the frontmatter at the top. `order` sets its position; `featured: true` puts it on the home page (the first three are shown).
3. Write the story under the four headings.
4. Add images to `src/assets/work/` and reference them:
   ```yaml
   cover: ../../assets/work/my-cover.jpg
   coverAlt: Short description of the image
   logo: ../../assets/work/client-logo.svg
   ```
   Astro resizes and compresses them at build time.
5. Add `results:` only with numbers the client has verified.
6. Remove `placeholder: true` when the write-up is final. That hides the draft flag.

## Contact form

GitHub Pages can't run server code, so the form posts to [FormSubmit](https://formsubmit.co).
Set `formEmail` in `src/data/site.ts`, deploy, submit the form once, and click the activation link FormSubmit emails you.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it.
One-time setup: in the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

### Custom domain later

In `astro.config.mjs`, set `site` to your domain and `base` to `'/'`, then add the domain under Settings → Pages.
