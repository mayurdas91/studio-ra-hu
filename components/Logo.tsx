/** Your mark. Colour comes from the surrounding `color`, so it fits any background. */
export default function Logo({ className = '' }: { className?: string }) {
  return <span className={`logo ${className}`} aria-hidden="true" />;
}
