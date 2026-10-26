import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CaseArt from '@/components/CaseArt';
import ContactBand from '@/components/ContactBand';
import { services, withBase } from '@/lib/site';
import { getAllWork, getWork } from '@/lib/work';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllWork().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const w = getWork((await params).slug);
  return w ? { title: w.sector, description: w.summary } : {};
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const all = getAllWork();
  const i = all.findIndex((w) => w.slug === slug);
  if (i < 0) notFound();
  const w = all[i];
  const prev = all[(i - 1 + all.length) % all.length];
  const next = all[(i + 1) % all.length];
  const serviceNames = w.services.map((id) => services.find((s) => s.id === id)?.title).filter(Boolean);

  return (
    <article>
      <header className="page-hero wrap" style={{ borderBottom: 0, paddingBottom: 48 }}>
        <Link className="cs-back" href="/work/">← All work</Link>
        <p className="eyebrow" style={{ marginTop: 40 }}>
          Case {String(w.order).padStart(2, '0')} · {w.sector}
        </p>
        <h1 className="cs-title">{w.title}</h1>
        {w.placeholder && (
          <p style={{ marginTop: 24 }}><span className="draft-tag">
            Draft: replace the bracketed text in content/work/{w.slug}.md
          </span></p>
        )}
      </header>

      <div className="wrap">
        <dl className="cs-meta" style={{ borderTop: 'var(--rule)' }} data-reveal>
          <div><dt>Client</dt><dd>{w.client ?? 'Confidential'}</dd></div>
          <div><dt>Sector</dt><dd>{w.sector}</dd></div>
          <div><dt>Disciplines</dt><dd>{w.disciplines.join(', ')}</dd></div>
          <div>
            <dt>{w.year ? 'Year' : 'Services'}</dt>
            <dd>{w.year ?? (serviceNames.join(', ') || '—')}</dd>
          </div>
        </dl>

        <div className="cs-cover" data-reveal>
          <div className="case-frame">
            {w.cover ? <img src={withBase(w.cover)} alt={w.coverAlt ?? ''} /> : <CaseArt variant={w.order} />}
          </div>
        </div>

        {w.results.length > 0 && (
          <div className="cs-results">
            {w.results.map((r, j) => (
              <div key={r.label} data-reveal style={{ ['--i' as string]: j }}>
                <strong>{r.value}</strong>
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="cs-body">
          <aside data-reveal>
            <p className="eyebrow">Process</p>
            <ol>{w.steps.map((s) => <li key={s}>{s}</li>)}</ol>
            {w.headings.length > 0 && (
              <>
                <p className="eyebrow">On this page</p>
                <ol>
                  {w.headings.map((h) => (
                    <li key={h.id}><a href={`#${h.id}`}>{h.text}</a></li>
                  ))}
                </ol>
              </>
            )}
          </aside>
          <div className="prose" data-reveal dangerouslySetInnerHTML={{ __html: w.html }} />
        </div>
      </div>

      <nav className="cs-next" aria-label="More case studies">
        <Link href={`/work/${prev.slug}/`}>
          <span>← Previous · {prev.sector}</span>
          <strong>{prev.title}</strong>
        </Link>
        <Link href={`/work/${next.slug}/`}>
          <span>Next · {next.sector} →</span>
          <strong>{next.title}</strong>
        </Link>
      </nav>
      <ContactBand />
    </article>
  );
}
