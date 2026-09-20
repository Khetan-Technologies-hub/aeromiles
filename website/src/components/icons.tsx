/**
 * Small inline SVG icon set. Icons are decorative by default (`aria-hidden`)
 * — the adjacent text carries the meaning. Never use emoji or bare unicode
 * glyphs as icons: screen readers announce them inconsistently and they
 * render differently per platform.
 */

type IconProps = {
  className?: string;
};

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      width="16"
      height="16"
      aria-hidden
      className={className}
    >
      <path
        d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      width="14"
      height="14"
      aria-hidden
      className={className}
    >
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
