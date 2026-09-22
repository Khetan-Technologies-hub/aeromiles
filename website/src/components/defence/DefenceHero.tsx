"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";

export function DefenceHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-navy-900 text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-20">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue mb-4">
            Defence & Government
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Capability shaped<br />by the mission.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl leading-relaxed mb-10">
            Providing high-reliability unmanned systems and indigenous drone capability designed for rigorous defence and government requirements.
          </p>
          <Link
            href="#capabilities"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white transition-colors hover:bg-white/20 active:scale-95"
          >
            Explore capabilities
          </Link>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <Reveal delay={0.4} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/50" aria-hidden>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </Reveal>
    </section>
  );
}