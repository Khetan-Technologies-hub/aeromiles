"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";

export function DefenceTeaser() {
  const capabilities = [
    "Tactical UAVs",
    "ISR Systems",
    "Custom Payload",
    "Flight Training",
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.2}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <Image
                 src="/images/defence-teaser.webp"
                 alt="Defence capability"
                 fill
                 className="object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6">
                Capability shaped<br />by the mission.
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Providing high-reliability unmanned systems and indigenous drone capability designed for rigorous defence and government requirements.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {capabilities.map((cap) => (
                  <span key={cap} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 backdrop-blur-sm">
                    {cap}
                  </span>
                ))}
              </div>

              <Link
                href="/defence"
                className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white transition-all hover:bg-white/20 active:scale-95"
              >
                Discuss a requirement
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
