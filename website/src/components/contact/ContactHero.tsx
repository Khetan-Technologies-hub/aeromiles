"use client";

import { Reveal } from "@/components/reveal";

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-navy text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 py-20 text-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue mb-4">
            Get in touch
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6">
            Let&apos;s build what<br />flies next.
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl leading-relaxed">
            Whether you&apos;re setting up a STEM lab, procuring defence UAVs, or chasing the perfect flight &mdash; we&apos;re ready to talk.
          </p>
        </Reveal>
      </div>
    </section>
  );
}