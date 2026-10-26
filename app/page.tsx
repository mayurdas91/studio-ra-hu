import Link from 'next/link';
import SunHero from '@/components/SunHero';
import ServiceIcon from '@/components/ServiceIcon';
import CaseCard from '@/components/CaseCard';
import ContactBand from '@/components/ContactBand';
import { services } from '@/lib/site';
import { getAllWork } from '@/lib/work';

export default function Home() {
  const featured = getAllWork().filter((w) => w.featured).slice(0, 3);
  const total = services.reduce((n, s) => n + s.deliverables.length, 0);
  return (
    <>
      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Marketing · Brand · Video · Software · Customer success</p>
          <h1>Make your brand hard to ignore.</h1>
          <p className="lede">
            Studio Ra Hu brings marketing, brand, video, software and customer success together, so businesses become
            clearer, more visible and easier to choose.
          </p>
          <div className="actions">
            <Link className="btn btn-red" href="/contact/">Work with us</Link>
            <Link className="btn btn-line" href="/work/">See the work</Link>
          </div>
        </div>
        <SunHero />
      </section>

      <section className="concept wrap" aria-label="Our name">
        <div className="concept-words" data-reveal>
          <p><b>Ra</b><span>the light</span></p>
          <p><b>Hu</b><span>the word</span></p>
        </div>
        <h2 data-reveal style={{ ['--i' as string]: 1 }}>
          We make businesses seen and heard. Strategy that shows people the way, and a voice they remember.
        </h2>
      </section>

      <section className="section wrap" id="services">
        <div className="section-head" data-reveal>
          <h2>What we do</h2>
          <p>{total} services across {services.length} practices</p>
        </div>
        <div className="tiles">
          {services.map((s, i) => (
            <Link key={s.id} className="tile" href={`/services/#${s.id}`} data-reveal style={{ ['--i' as string]: i % 5 }}>
              <ServiceIcon id={s.id} />
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section wrap" id="work" style={{ paddingTop: 0 }}>
        <div className="section-head" data-reveal>
          <h2>Selected work</h2>
          <Link href="/work/" style={{ fontWeight: 700 }}>All case studies →</Link>
        </div>
        <div className="cases">
          {featured.map((w, i) => (
            <CaseCard key={w.slug} work={w} index={i} />
          ))}
        </div>
      </section>

      <ContactBand />
    </>
  );
}
