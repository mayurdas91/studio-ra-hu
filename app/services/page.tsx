import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';
import ContactBand from '@/components/ContactBand';
import { services, processSteps } from '@/lib/site';
import { getAllWork } from '@/lib/work';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Digital marketing, brand management, video editing and production, software development and customer success management.',
};

export default function ServicesPage() {
  const work = getAllWork();
  return (
    <>
      <section className="page-hero wrap">
        <p className="eyebrow" data-reveal>Services</p>
        <h1 data-reveal style={{ ['--i' as string]: 1 }}>From brand and marketing to software and customer success.</h1>
        <p className="lede" data-reveal style={{ ['--i' as string]: 2 }}>
          Take a single service or combine several. Either way, every piece of work is tied back to what the business needs.
        </p>
        <nav className="jump" aria-label="Practices" data-reveal style={{ ['--i' as string]: 3 }}>
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              <ServiceIcon id={s.id} size={20} />
              {s.short}
            </a>
          ))}
        </nav>
      </section>

      <section className="section wrap">
        {services.map((s, i) => {
          const related = work.filter((w) => w.services.includes(s.id));
          return (
            <article key={s.id} id={s.id} className="service-row" data-reveal>
              <span className="num" style={{ fontWeight: 700, letterSpacing: '.12em', fontSize: 13 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <ServiceIcon id={s.id} size={48} />
                <h2 style={{ marginTop: 20 }}>{s.title}</h2>
                <p className="summary">{s.summary}</p>
                {related.length > 0 && (
                  <p className="related">
                    See it in practice:{' '}
                    {related.map((r, j) => (
                      <span key={r.slug}>
                        {j > 0 && ', '}
                        <Link href={`/work/${r.slug}/`}>{r.sector}</Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
              <ul className="deliverables">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </section>

      <section className="section wrap" style={{ paddingTop: 0 }}>
        <div className="section-head" data-reveal>
          <h2>How we work</h2>
        </div>
        <div className="steps">
          {processSteps.map((p, i) => (
            <div key={p.title} data-reveal style={{ ['--i' as string]: i }}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
