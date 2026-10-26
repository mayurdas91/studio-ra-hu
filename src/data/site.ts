// Site-wide settings and copy. Edit here, not in individual pages.

export const site = {
  name: 'Studio Ra Hu',
  tagline: 'Strategy, creative and technology. Built to work together.',
  description:
    'Studio Ra Hu — digital marketing, brand management, video production, software development and customer success.',

  // Contact form goes through FormSubmit (https://formsubmit.co), because
  // GitHub Pages can't run a server. Replace with your email, submit the form
  // once, and click the activation link FormSubmit emails you.
  formEmail: 'mayur.das91@gmail.com',

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

// The figures on the rising sun on the home page.
export const stats = [
  { value: '10+', label: 'Years' },
  { value: '120+', label: 'Projects' },
];

export type Service = {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    summary:
      'Strategy and execution across search, paid, social, email and content, measured and improved over time.',
    deliverables: [
      'Marketing strategy & consultation',
      'SEO',
      'Landing page design & optimization',
      'PPC advertising',
      'Social media management',
      'Email marketing',
      'Content marketing',
      'Marketing analytics',
      'Marketing automation',
      'Online reputation management',
    ],
  },
  {
    id: 'brand',
    title: 'Brand Management',
    summary:
      'Positioning, identity and guidelines that make a brand clear, consistent and easy to recognise.',
    deliverables: [
      'Brand strategy & positioning',
      'Logo design & visual identity',
      'Brand guidelines development',
      'Naming & tagline development',
      'Brand tone development',
      'Rebranding',
      'Brand audits',
      'Packaging design',
      'Brand architecture',
      'Market research',
      'Brand experience design',
      'Brand reputation management',
    ],
  },
  {
    id: 'video',
    title: 'Video Editing & Production',
    summary:
      'Video from script to final cut, for products, companies and channels.',
    deliverables: [
      'Scripting & storyboarding',
      'Post-production',
      'Motion graphics & animation',
      'Sound design & audio mixing',
      'Voiceover recording & sourcing',
      'Explainer video production',
      'Product demo videos',
      'Corporate video production',
      'Live streaming production',
      'YouTube channel management',
    ],
  },
  {
    id: 'software',
    title: 'Software Development',
    summary:
      'Web, mobile and custom software, from first prototype to long-term maintenance.',
    deliverables: [
      'Custom software development',
      'Web application development',
      'UI/UX design & prototyping',
      'Mobile app development (Android)',
      'API development',
      'Database design & management',
      'Software testing',
      'Software maintenance & support',
      'Legacy system modernization',
      'E-commerce development',
      'SaaS product development',
      'MVP development for startups',
    ],
  },
  {
    id: 'customer-success',
    title: 'Customer Success Management',
    summary:
      'Onboarding, retention and growth programmes that keep customers successful after the sale.',
    deliverables: [
      'Onboarding & implementation management',
      'Customer health scoring & monitoring',
      'Renewal & retention management',
      'Upsell & cross-sell strategy',
      'Churn analysis & prevention',
      'Customer journey mapping',
      'Voice-of-customer programs',
      'Playbook development for CS teams',
      'Customer training & enablement',
      'Escalation management',
      'Post-sale relationship management',
    ],
  },
];

export const process = [
  { title: 'Discover', text: 'Understand the business, audience and actual problem.' },
  { title: 'Strategise', text: 'Turn the problem into a focused plan and direction.' },
  { title: 'Create', text: 'Build the brand, content, video or software the plan calls for.' },
  { title: 'Launch', text: 'Put the work in front of the people it is meant for.' },
  { title: 'Optimise', text: 'Learn from performance and improve what comes next.' },
];
