import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Whether the card is a link wrapper */
  asLink?: boolean;
  href?: string;
  /** Hover lift animation (uses Framer Motion) */
  hoverLift?: boolean;
  /** Padding inside the card */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  /** Custom style overrides */
  style?: React.CSSProperties;
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
} as const;

export function Card({
  children,
  className = "",
  asLink = false,
  href,
  hoverLift = false,
  padding = "lg",
  style,
}: CardProps) {
  const baseClasses = [
    "group",
    "overflow-hidden",
    "rounded-3xl",
    "border",
    "border-border",
    "bg-bg-white",
    "transition-shadow",
    "duration-300",
    "hover:shadow-xl",
    paddingMap[padding],
    className,
  ].filter(Boolean).join(" ");

  if (asLink && href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={baseClasses} style={style}>
      {children}
    </div>
  );
}

/** Card media wrapper — consistent aspect ratio and overflow handling */
export function CardMedia({
  children,
  className = "",
  aspect = "video", // "video" = 16:9, "square" = 1:1, "portrait" = 3:4
}: {
  children: ReactNode;
  className?: string;
  aspect?: "video" | "square" | "portrait";
}) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}>
      {children}
    </div>
  );
}

/** Card footer — for CTAs, metadata, etc. */
export function CardFooter({
  children,
  className = "",
  divider = true,
}: {
  children: ReactNode;
  className?: string;
  divider?: boolean;
}) {
  return (
    <div className={`mt-6 ${divider ? "pt-6 border-t border-line" : ""} ${className}`}>
      {children}
    </div>
  );
}