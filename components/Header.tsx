'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { site } from '@/lib/site';

const links = [
  { href: '/services/', label: 'Services' },
  { href: '/work/', label: 'Work' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const path = usePathname();
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.wordmark}, home`}>
        <Logo />
        {site.wordmark}
      </Link>
      <nav className="site-nav" aria-label="Main">
        {links.map((l) => (
          <Link key={l.href} href={l.href} aria-current={path?.startsWith(l.href) ? 'page' : undefined}>
            {l.label}
          </Link>
        ))}
      </nav>
      <Link className="btn btn-ink header-cta" href="/contact/">
        Start a conversation
      </Link>
    </header>
  );
}
