import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero wrap" style={{ minHeight: '70vh', borderBottom: 0 }}>
      <p className="eyebrow">404</p>
      <h1>This page isn't here.</h1>
      <div className="actions">
        <Link className="btn btn-red" href="/">Back to home</Link>
      </div>
    </section>
  );
}
