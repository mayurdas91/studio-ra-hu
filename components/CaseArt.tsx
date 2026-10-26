/** Placeholder artwork for a case study until a real cover image is added. */
export default function CaseArt({ variant }: { variant: number }) {
  const v = ((variant - 1) % 3 + 3) % 3;
  if (v === 0)
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ background: '#7A2414' }}>
        <circle cx="200" cy="330" r="190" fill="#F2A93B" />
        <rect x="0" y="210" width="400" height="8" fill="#7A2414" />
        <rect x="0" y="236" width="400" height="12" fill="#7A2414" />
        <rect x="0" y="266" width="400" height="16" fill="#7A2414" />
      </svg>
    );
  if (v === 1)
    return (
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ background: '#1E120C' }}>
        <circle cx="110" cy="150" r="70" fill="#F2A93B" />
        <circle cx="230" cy="150" r="70" fill="none" stroke="#F2A93B" strokeWidth="10" />
        <circle cx="330" cy="150" r="30" fill="#7A2414" />
      </svg>
    );
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style={{ background: '#F6ECDD' }}>
      <path d="M60 230a140 140 0 0 1 280 0z" fill="#7A2414" />
      <rect x="40" y="244" width="320" height="10" fill="#1E120C" />
    </svg>
  );
}
