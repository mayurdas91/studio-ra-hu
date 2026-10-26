import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Thank you', robots: { index: false } };

export default function Thanks() {
  return (
    <section className="page-hero wrap" style={{ minHeight: '70vh', borderBottom: 0 }}>
      <p className="eyebrow">Message sent</p>
      <h1>Thank you. We'll be in touch soon.</h1>
      <div className="actions">
        <Link className="btn btn-red" href="/work/">Browse the work</Link>
        <Link className="btn btn-line" href="/">Back to home</Link>
      </div>
    </section>
  );
}
