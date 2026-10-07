"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function EducationHero() {
  return (
    <section className="relative h-screen w-full flex items-center bg-navy text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/education/stem-lab-hero.png"
          alt="STEM Lab Experience"
          className="h-full w-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-32 md:py-40">
        <Reveal>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-6">
            STEM Excellence
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            From Curiosity to <span className="text-blue-400">First Flight.</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
            Empowering the next generation of aerospace engineers through
            hands-on aeromodelling labs, structured curriculum, and
            industry-grade drone capability.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#programs"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              Explore Programs
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/30 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
