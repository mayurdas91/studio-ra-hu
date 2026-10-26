import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Tell Studio Ra Hu what you're building, where you're stuck, or what needs to change.",
};

export default function ContactPage() {
  return (
    <section className="contact-page wrap">
      <div data-reveal>
        <p className="eyebrow">Let's talk</p>
        <h1>Have a problem worth solving?</h1>
        <p className="lede">Tell us what you're building, where you're stuck, or what needs to change.</p>
        {(site.email || site.linkedin) && (
          <div className="contact-alt">
            {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
            {site.linkedin && <a href={site.linkedin} rel="noopener">LinkedIn →</a>}
          </div>
        )}
      </div>
      <ContactForm />
    </section>
  );
}
