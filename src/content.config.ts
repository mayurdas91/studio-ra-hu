import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each case study is one Markdown file in src/content/work/.
// The file name becomes the URL: hospital-communication.md → /work/hospital-communication/
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(), // the headline: the problem you solved
      sector: z.string(), // e.g. "Hospital communication"
      client: z.string().optional(), // leave out if under NDA
      year: z.string().optional(),
      order: z.number(), // position on the Work page (1 = first)
      featured: z.boolean().default(false), // shown on the home page
      summary: z.string(), // one or two sentences for cards and previews
      disciplines: z.array(z.string()),
      services: z.array(z.string()).default([]), // ids from src/data/site.ts
      steps: z.array(z.string()), // the process line, e.g. Research → Structure
      cover: image().optional(), // put images in src/assets/work/
      coverAlt: z.string().optional(),
      logo: image().optional(), // client logo, ideally SVG
      results: z
        .array(z.object({ value: z.string(), label: z.string() }))
        .default([]), // only verified numbers
      placeholder: z.boolean().default(false), // shows a "draft" flag until real content is in
    }),
});

export const collections = { work };
