"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

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
 *
 * `whileInView` only fires for elements that *enter* the viewport, so anything
 * the browser has already scrolled past on load — a deep link, an anchor, a
 * refresh at a restored scroll position, a back navigation — would stay stuck
 * at opacity 0 forever. We measure once on mount and render those revealed.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [alreadyPassed, setAlreadyPassed] = useState(false);

  useLayoutEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    // Fully above the viewport at first paint — never going to intersect.
    if (rect && rect.bottom <= 0) setAlreadyPassed(true);
  }, []);

  if (prefersReduced || alreadyPassed) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
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
