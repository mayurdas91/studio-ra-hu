import Link from 'next/link';

export default function ContactBand() {
  return (
    <section className="contact-band wrap" aria-labelledby="cta-title">
      <h2 id="cta-title" data-reveal>Have a problem worth solving?</h2>
      <Link className="btn btn-saffron" href="/contact/" data-reveal>
        Start a conversation →
      </Link>
    </section>
  );
}
