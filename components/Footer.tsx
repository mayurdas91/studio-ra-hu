import Link from 'next/link';
import Logo from './Logo';
import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer wrap">
      <Link className="brand" href="/">
        <Logo />
        {site.wordmark}
      </Link>
      <nav aria-label="Footer">
        <Link href="/services/">Services</Link>
        <Link href="/work/">Work</Link>
        <Link href="/contact/">Contact</Link>
      </nav>
      <span>
        {site.tagline} © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
