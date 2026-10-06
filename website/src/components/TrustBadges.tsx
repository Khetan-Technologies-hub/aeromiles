"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface TrustBadge {
  label: string;
  type: "certification" | "partner" | "stat";
  href?: string;
}

interface TrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
  /** Variant: "marquee" for scrolling, "grid" for certification grid */
  variant?: "marquee" | "grid";
  /** Maximum badges to show on mobile */
  maxMobile?: number;
  /** Title above the badges */
  title?: string;
  /** Subtitle */
  subtitle?: string;
}

const typeIcons: Record<TrustBadge["type"], ReactNode> = {
  certification: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M8 11h8M8 15h8" />
      <path d="M12 5v-2M12 19v2" />
    </svg>
  ),
  partner: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  stat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="h-5 w-5">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
};

export function TrustBadges({
  badges,
  className = "",
  variant = "marquee",
  maxMobile = 5,
  title,
  subtitle,
}: TrustBadgesProps) {
  const prefersReduced = useReducedMotion();

  // Grid variant — for hero trust badges
  if (variant === "grid") {
    return (
      <div className={` ${className}`} role="list" aria-label={title || "Certifications and partnerships"}>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/60 bg-white/20 text-white text-sm font-bold transition-colors hover:border-white hover:bg-white/30"
              role="listitem"
            >
              <span className="text-blue">{typeIcons[badge.type]}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Marquee variant — scrolling logo carousel
  return (
    <div className={`overflow-hidden ${className}`} aria-label={title || "Trusted by"}>
      {title && <h3 className="text-sm font-semibold uppercase tracking-wider text-slate mb-4">{title}</h3>}
      <div className="relative" aria-hidden>
        <motion.div
          animate={prefersReduced ? {} : { x: [-300, 300] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-12"
          style={{ width: "max-content" }}
        >
          {badges.map((badge, idx) => (
            <div key={idx} className="flex-shrink-0 w-[180px] opacity-60 hover:opacity-100 transition-opacity">
              {badge.href ? (
                <a href={badge.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center justify-center h-12">
                    {typeIcons[badge.type]}
                  </div>
                </a>
              ) : (
                <div className="flex items-center justify-center h-12">
                  {typeIcons[badge.type]}
                </div>
              )}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {badges.map((badge, idx) => (
            <div key={`${idx}-dup`} className="flex-shrink-0 w-[180px] opacity-60 hover:opacity-100 transition-opacity">
              {badge.href ? (
                <a href={badge.href} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="flex items-center justify-center h-12">
                    {typeIcons[badge.type]}
                  </div>
                </a>
              ) : (
                <div className="flex items-center justify-center h-12">
                  {typeIcons[badge.type]}
                </div>
              )}
            </div>
          ))}
        </motion.div>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

/** Certification badge grid — for defence/about pages */
export function CertificationGrid({
  certifications,
  className = "",
  columns = 4,
}: {
  certifications: Array<{
    name: string;
    logo: ReactNode;
    description?: string;
    href?: string;
  }>;
  className?: string;
  columns?: number;
}) {
  return (
    <div className={`${className}`}>
      <div className={`grid grid-cols-2 md:grid-cols-${columns} gap-6 md:gap-8`} role="list">
        {certifications.map((cert, idx) => (
          <div key={idx} className="group flex flex-col items-center text-center p-6 rounded-2xl border border-line bg-bg-white transition-shadow hover:shadow-lg" role="listitem">
            <div className="mb-4 flex h-20 w-20 items-center justify-center">
              {cert.logo}
            </div>
            <h4 className="font-semibold text-navy mb-1">{cert.name}</h4>
            {cert.description && <p className="text-sm text-slate">{cert.description}</p>}
            {cert.href && (
              <a href={cert.href} target="_blank" rel="noopener noreferrer" className="mt-2 text-xs font-bold text-blue-600 hover:text-blue-700">
                Learn more
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}