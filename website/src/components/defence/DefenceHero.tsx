"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";
import Image from "next/image";

export function DefenceHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/defence/tactical-uav-mission.png"
          alt="Tactical UAV in a high-tech command center"
          fill
          className="object-cover brightness-125"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32 md:py-40">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue mb-4 mt-12 sm:mt-0">
            Defence & Government
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl mb-6 max-w-3xl">
            Capability shaped<br />by the mission.
          </h1>
          <p className="max-w-2xl text-lg text-white/90 sm:text-xl leading-relaxed mb-10">
            Providing high-reliability unmanned systems and indigenous drone capability designed for rigorous defence and government requirements.
          </p>
          <Link
            href="#capabilities"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full border border-white/60 bg-white/20 px-8 py-4 font-bold text-white transition-colors hover:bg-white/30 active:scale-95"
          >
            Explore capabilities
          </Link>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      {/* Removed as per design update to Hero sections */}

    </section>
  );
}