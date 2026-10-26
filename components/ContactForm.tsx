import { site, siteOrigin, withBase } from '@/lib/site';

/** Posts to FormSubmit, which emails each enquiry to site.formEmail. */
export default function ContactForm() {
  const next = `${siteOrigin()}${withBase('/thanks/')}`;
  return (
    <form className="form" action={`https://formsubmit.co/${site.formEmail}`} method="POST" data-reveal>
      <input type="hidden" name="_subject" value="New Studio Ra Hu enquiry" />
      <input type="hidden" name="_next" value={next} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <label htmlFor="cf-name">Your name</label>
      <input id="cf-name" name="name" required placeholder="Your name" autoComplete="name" />
      <label htmlFor="cf-email">Email address</label>
      <input id="cf-email" name="email" type="email" required placeholder="Email address" autoComplete="email" />
      <label htmlFor="cf-company">Company</label>
      <input id="cf-company" name="company" placeholder="Company" autoComplete="organization" />
      <label htmlFor="cf-message">What can we help with?</label>
      <textarea id="cf-message" name="message" rows={5} required placeholder="What can we help with?" />
      <button className="btn btn-red" type="submit">
        Start a conversation →
      </button>
    </form>
  );
}
