"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import { cn } from "@/lib/utils";

type AudiencePath = {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  href: string;
};

const PATHS: AudiencePath[] = [
  {
    title: "Schools & Colleges",
    description: "Setting up cutting-edge STEM labs and aeromodelling programs for the next generation of engineers.",
    color: "bg-blue/5",
    accentColor: "bg-blue",
    href: "/education",
  },
  {
    title: "Defence & Govt",
    description: "Providing mission-ready UAV capabilities and indigenous drone technology for national security.",
    color: "bg-green/5",
    accentColor: "bg-green",
    href: "/defence",
  },
  {
    title: "Aviation Hobbyists",
    description: "High-performance RC aircraft and precision flight systems for the dedicated enthusiast.",
    color: "bg-saffron/5",
    accentColor: "bg-saffron",
    href: "/products",
  },
];

export function AudiencePaths() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Subtle background engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate mb-3 block font-display">
              Flight Ecosystem
            </span>
            <h2 className="text-3xl font-extrabold text-ink sm:text-5xl tracking-tight font-display">
              One ecosystem.<br />Three ways forward.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHS.map((path, idx) => (
            <Reveal key={path.title} delay={idx * 0.1}>
              <motion.div
                whileHover={prefersReduced ? undefined : { y: -8, scale: 1.01 }}
                className={cn(
                  "group relative flex h-full flex-col rounded-3xl border border-line p-8 transition-all duration-300 hover:shadow-2xl hover:border-blue/30",
                  path.color.replace('bg-blue/5', 'bg-blue/10').replace('bg-green/5', 'bg-green/10').replace('bg-saffron/5', 'bg-saffron/10'),
                  "backdrop-blur-sm"
                )}
              >
                {/* Precision Markers */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-slate/40 tracking-tighter">
                {`[ ${100 + idx} // ARC ]`}
                </div>

                {/* Accent Top Bar */}
                <div className={cn(
                  "absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-300 group-hover:h-2",
                  path.accentColor
                )} />

                <h3 className="text-2xl font-bold text-ink mb-4 font-display">
                  {path.title}
                </h3>
                <p className="mb-8 max-w-[60ch] leading-relaxed text-slate font-sans">
                  {path.description}
                </p>

                <Link
                  href={path.href}
                  className="mt-auto inline-flex items-center gap-2 font-bold text-ink group-hover:text-blue transition-colors"
                >
                  Explore
                  <ArrowRightIcon className="text-blue transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="sr-only">{path.title}</span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
