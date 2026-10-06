"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center bg-navy text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-32 md:py-40 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue mb-4 mt-12 sm:mt-0">
            About Aeromiles
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Building India&apos;s<br />next generation of flight.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl leading-relaxed mb-10">
            From hobbyist RC planes to mission-ready defence UAVs — one company, three verticals, a shared mission to advance indigenous aerospace capability.
          </p>
          <Link
            href="/contact"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full bg-blue px-10 py-4 font-bold text-white transition-colors hover:bg-blue-600 active:scale-95"
          >
            Partner with us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}