"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger this item's entrance, in seconds. */
  delay?: number;
  /** Extra classes on the wrapper. */
  className?: string;
};

/**
 * Scroll-reveal wrapper: fades + slides its children up once as they enter the
 * viewport. Animates opacity/transform only (no layout shift) and, when the
 * viewer prefers reduced motion, renders the content immediately with no motion.
 * See CLAUDE.md + Aeromiles_Animation_Spec.md.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 0.84, 0.44, 1] }}
    >
      {children}
    </motion.div>
  );
}
