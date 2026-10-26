# STUDIO RA HU

Website for Studio Ra Hu, built with [Next.js](https://nextjs.org) (React) in the "Sunrise" design.
It exports plain static files, so it runs on Vercel, Netlify and GitHub Pages from the same code.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # outputs the finished site to out/
```

## Where things live

| What | Where |
| --- | --- |
| Name, the figures on the sun (10+ Years, 120+ Projects), form email, services | `lib/site.ts` |
| Case studies (one Markdown file each) | `content/work/` |
| Colours, fonts, animations | `app/globals.css` (colour tokens at the top) |
| Logo | `app/logo-mask.png` (recoloured by CSS), `app/icon.png` (browser tab) |
| Pages | `app/` (`page.tsx` is the home page) |
| Shared pieces (header, footer, sun, cards, form) | `components/` |

## Changing the figures on the sun

Edit `stats` in `lib/site.ts`.

## Adding or editing a case study

1. Copy any file in `content/work/` and rename it. The file name becomes the URL.
2. Fill in the fields at the top. `order` sets its position; `featured: true` puts it on the home page (the first three are shown).
3. Write the story under the four headings.
4. For a cover image, put it in `public/work/` and add `cover: /work/your-image.jpg` and `coverAlt: Short description`.
5. Add `results:` only with numbers the client has verified, e.g.
   ```yaml
   results:
     - value: 3×
       label: More qualified leads
   ```
6. Remove `placeholder: true` when the write-up is final. That hides the "Draft" label.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co), which emails each enquiry to `formEmail` in `lib/site.ts`.
The first submission sends an activation email; click it once.

## Deploying

- **Vercel:** builds automatically on every push to `main` (`vercel.json`).
- **Netlify:** builds automatically (`netlify.toml`).
- **GitHub Pages:** `.github/workflows/deploy.yml` builds and publishes on every push to `main`, under `/studio-ra-hu/`.
  Settings → Pages → Source must be **GitHub Actions**.
