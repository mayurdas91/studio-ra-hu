/** A simple sun-shape mark for each practice. Colour follows `color`. */
export default function ServiceIcon({ id, size = 56 }: { id: string; size?: number }) {
  const c = 'currentColor';
  const shapes: Record<string, React.ReactNode> = {
    'digital-marketing': <circle cx="28" cy="28" r="27" fill={c} />,
    brand: (
      <>
        <path d="M1 28a27 27 0 0 1 54 0z" fill={c} />
        <rect x="1" y="34" width="54" height="4" fill={c} />
      </>
    ),
    video: (
      <>
        <circle cx="28" cy="28" r="25" fill="none" stroke={c} strokeWidth="4" />
        <path d="M23 18l14 10-14 10z" fill={c} />
      </>
    ),
    software: (
      <>
        <rect x="2" y="2" width="52" height="52" rx="26" fill="none" stroke={c} strokeWidth="4" />
        <path d="M20 22l-7 6 7 6M36 22l7 6-7 6" fill="none" stroke={c} strokeWidth="4" />
      </>
    ),
    'customer-success': (
      <>
        <circle cx="20" cy="28" r="17" fill={c} />
        <circle cx="36" cy="28" r="17" fill="none" stroke={c} strokeWidth="4" />
      </>
    ),
  };
  return (
    <svg className="icon" width={size} height={size} viewBox="0 0 56 56" aria-hidden="true">
      {shapes[id] ?? <circle cx="28" cy="28" r="27" fill={c} />}
    </svg>
  );
}
