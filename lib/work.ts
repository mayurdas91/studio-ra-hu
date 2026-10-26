// Loads case studies from content/work/*.md at build time.
// The file name becomes the URL: hospital-communication.md → /work/hospital-communication/
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { Marked } from 'marked';

const DIR = path.join(process.cwd(), 'content', 'work');

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  client?: string;
  year?: string;
  order: number;
  featured: boolean;
  placeholder: boolean;
  summary: string;
  disciplines: string[];
  services: string[];
  steps: string[];
  /** Image in public/, e.g. /work/hospital-cover.jpg */
  cover?: string;
  coverAlt?: string;
  results: { value: string; label: string }[];
  html: string;
  headings: { id: string; text: string }[];
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function render(markdown: string) {
  const headings: CaseStudy['headings'] = [];
  const marked = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const id = slugify(text);
        if (depth === 2) headings.push({ id, text: text.replace(/<[^>]+>/g, '') });
        return `<h${depth} id="${id}">${text}</h${depth}>\n`;
      },
    },
  });
  const html = marked.parse(markdown, { async: false }) as string;
  return { html, headings };
}

function load(file: string): CaseStudy {
  const raw = fs.readFileSync(path.join(DIR, file), 'utf8');
  const { data, content } = matter(raw);
  const { html, headings } = render(content);
  return {
    slug: file.replace(/\.md$/, ''),
    title: String(data.title),
    sector: String(data.sector),
    client: data.client,
    year: data.year ? String(data.year) : undefined,
    order: Number(data.order ?? 99),
    featured: Boolean(data.featured),
    placeholder: Boolean(data.placeholder),
    summary: String(data.summary ?? ''),
    disciplines: data.disciplines ?? [],
    services: data.services ?? [],
    steps: data.steps ?? [],
    cover: data.cover,
    coverAlt: data.coverAlt,
    results: data.results ?? [],
    html,
    headings,
  };
}

export function getAllWork(): CaseStudy[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map(load)
    .sort((a, b) => a.order - b.order);
}

export function getWork(slug: string): CaseStudy | undefined {
  return getAllWork().find((w) => w.slug === slug);
}
