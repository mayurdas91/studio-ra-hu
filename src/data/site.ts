// Site-wide settings and copy. Edit here, not in individual pages.

export const site = {
  name: 'Studio Ra Hu',
  tagline: 'Strategic marketing. Creative execution.',
  description:
    'Studio Ra Hu — strategic marketing, content, creative and digital execution.',

  // Contact form goes through FormSubmit (https://formsubmit.co), because
  // GitHub Pages can't run a server. Replace with your email, submit the form
  // once, and click the activation link FormSubmit emails you.
  formEmail: 'YOUR_EMAIL_HERE',

  // Optional: shown on the contact page as a fallback. Leave '' to hide.
  email: '',
  linkedin: '',
};

/** Prefix an internal path with the deploy base (needed on GitHub Pages). */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

export type Service = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    summary:
      'Turn business goals into a clear content direction, editorial calendar and repeatable system.',
    deliverables: ['Content audit', 'Audience & message mapping', 'Editorial calendar', 'Content operating system'],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    summary:
      'Website copy, articles, thought leadership, marketing collateral and campaign content built around the audience.',
    deliverables: ['Website copy', 'Articles & thought leadership', 'Marketing collateral', 'Campaign content'],
  },
  {
    id: 'seo',
    title: 'SEO & Search Content',
    summary:
      'Keyword research, search-led content, on-page optimisation and content designed to earn relevant organic visibility.',
    deliverables: ['Keyword research', 'Search-led content plans', 'On-page optimisation', 'Content refreshes'],
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    summary:
      'Platform strategy, content calendars, creative direction and day-to-day communication that feels like a brand, not a content mill.',
    deliverables: ['Platform strategy', 'Content calendars', 'Creative direction', 'Community communication'],
  },
  {
    id: 'brand',
    title: 'Brand & Creative',
    summary:
      'Positioning, messaging, campaign concepts, visual direction and marketing assets that make the brand more coherent.',
    deliverables: ['Positioning & messaging', 'Campaign concepts', 'Visual direction', 'Launch assets'],
  },
  {
    id: 'digital',
    title: 'Digital Marketing',
    summary:
      'Integrated marketing support across content, SEO, social, email and digital channels, with execution tied back to objectives.',
    deliverables: ['Channel planning', 'Email marketing', 'Integrated campaigns', 'Performance reviews'],
  },
];

export const process = [
  { title: 'Discover', text: 'Understand the business, audience and actual problem.' },
  { title: 'Strategise', text: 'Turn the problem into a focused marketing direction.' },
  { title: 'Create', text: 'Build the messaging, content and creative assets.' },
  { title: 'Launch', text: 'Put the work into the channels where it can matter.' },
  { title: 'Optimise', text: 'Learn from performance and improve what comes next.' },
];
