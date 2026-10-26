import Link from 'next/link';
import type { CaseStudy } from '@/lib/work';
import CaseArt from './CaseArt';
import { withBase } from '@/lib/site';

export default function CaseCard({ work, index }: { work: CaseStudy; index: number }) {
  return (
    <Link className="case" href={`/work/${work.slug}/`} data-reveal style={{ ['--i' as string]: index % 3 }}>
      <div className="case-frame">
        {work.cover ? <img src={withBase(work.cover)} alt={work.coverAlt ?? ''} loading="lazy" /> : <CaseArt variant={work.order} />}
      </div>
      <p className="meta">
        {String(work.order).padStart(2, '0')} · {work.sector}
      </p>
      <h3>{work.title}</h3>
      {work.placeholder && <span className="draft-tag">Draft</span>}
    </Link>
  );
}
