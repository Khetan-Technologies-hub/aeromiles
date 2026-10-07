"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface StatCounterProps {
  end: number;
  label: string;
  suffix?: string;
  duration?: number;
}

export function StatCounter({ end, label, suffix = "", duration = 2.5 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  // Check if user prefers reduced motion
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center text-center"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-3 tabular-nums">
        {isVisible && !prefersReducedMotion ? (
          <>
            <CountUp end={end} duration={duration} />
            {suffix && <span className="text-blue">{suffix}</span>}
          </>
        ) : prefersReducedMotion ? (
          <>
            {end}
            {suffix && <span className="text-blue">{suffix}</span>}
          </>
        ) : (
          <>
            0
            {suffix && <span className="text-blue">{suffix}</span>}
          </>
        )}
      </div>
      <p className="text-sm sm:text-base text-white/70 font-medium tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}
