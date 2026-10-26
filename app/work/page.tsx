import type { Metadata } from 'next';
import CaseCard from '@/components/CaseCard';
import ContactBand from '@/components/ContactBand';
import { getAllWork } from '@/lib/work';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies from Studio Ra Hu: strategy, content, brand, video and software work for real business problems.',
};

export default function WorkPage() {
  const work = getAllWork();
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow" data-reveal>Selected work</p>
        <h1 data-reveal style={{ ['--i' as string]: 1 }}>Problems worth solving, and how we solved them.</h1>
        <p className="lede" data-reveal style={{ ['--i' as string]: 2 }}>
          Each case study covers the situation, the thinking behind the work and what changed.
        </p>
      </section>
      <section className="section wrap">
        <div className="cases">
          {work.map((w, i) => (
            <CaseCard key={w.slug} work={w} index={i} />
          ))}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
