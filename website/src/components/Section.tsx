"use client";

import { ReactNode } from "react";
import { Reveal } from "./reveal";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Background variant */
  variant?: "default" | "soft" | "muted" | "navy" | "navy-900" | "blue";
  /** Vertical padding size */
  padding?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  /** Whether to wrap content in container (max-w-[1200px]) */
  container?: boolean;
  /** Additional wrapper className */
  wrapperClassName?: string;
  /** Reveal animation for the whole section */
  reveal?: boolean;
  /** Reveal delay */
  revealDelay?: number;
}

const paddingMap = {
  none: "",
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-24",
  "2xl": "py-32",
  "3xl": "py-40",
} as const;

const variantMap = {
  default: "bg-bg",
  soft: "bg-bg-soft",
  muted: "bg-bg-muted",
  navy: "bg-navy text-white",
  "navy-900": "bg-navy-900 text-white",
  blue: "bg-blue text-white",
} as const;

export function Section({
  children,
  className = "",
  id,
  variant = "default",
  padding = "xl",
  container = true,
  wrapperClassName = "",
  reveal = false,
  revealDelay = 0,
}: SectionProps) {
  const sectionClassName = [
    variantMap[variant],
    paddingMap[padding],
    className,
  ].filter(Boolean).join(" ");

  const content = (
    <div className={wrapperClassName}>
      {container ? (
        <div className="container mx-auto px-6">{children}</div>
      ) : (
        children
      )}
    </div>
  );

  if (reveal) {
    return (
      <section id={id} className={sectionClassName} aria-labelledby={id ? `${id}-heading` : undefined}>
        <Reveal delay={revealDelay}>{content}</Reveal>
      </section>
    );
  }

  return (
    <section id={id} className={sectionClassName} aria-labelledby={id ? `${id}-heading` : undefined}>
      {content}
    </section>
  );
}