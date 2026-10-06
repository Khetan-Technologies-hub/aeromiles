"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function EducationHero() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <Reveal>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-6">
                STEM Excellence
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-navy-900">
                From Curiosity to <span className="text-blue-600">First Flight.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
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
                  className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold rounded-xl transition-all border border-slate-200"
                >
                  Contact Us
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Image */}
          <div className="relative order-1 lg:order-2">
            <Reveal>
              <div className="relative aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/images/education/stem-lab-hero.png"
                  alt="STEM Lab Experience"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl -z-10" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
