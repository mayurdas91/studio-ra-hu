'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Fades [data-reveal] elements up as they scroll into view. Re-runs on every page. */
export default function Reveal() {
  const path = usePathname();
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);
  return null;
}
