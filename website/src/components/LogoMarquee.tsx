"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

interface LogoMarqueeProps {
  logos: Array<{ name: string; url: string }>;
  speed?: number;
}

export function LogoMarquee({ logos, speed = 30 }: LogoMarqueeProps) {
  const shouldReduceMotion = useReducedMotion();
  const duplicatedLogos = [...logos, ...logos]; // Duplicate for seamless loop

  return (
    <div className="overflow-hidden bg-navy py-12 sm:py-16">
      <div className="relative">
        <motion.div
          className="flex gap-8 sm:gap-12 lg:gap-16"
          animate={shouldReduceMotion ? {} : { x: [0, -50 * logos.length] }}
          transition={
            shouldReduceMotion
              ? {}
              : {
                  duration: speed,
                  repeat: Infinity,
                  ease: "linear",
                }
          }
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center h-16 sm:h-20 px-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="max-h-full max-w-[120px] sm:max-w-[150px] object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient fade on edges */}
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy to-transparent pointer-events-none" />
      </div>
    </div>
  );
}
