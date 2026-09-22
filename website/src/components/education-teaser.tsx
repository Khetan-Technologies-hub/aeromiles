"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "./icons";

export function EducationTeaser() {
  const checklist = [
    "Modular aeromodelling kits",
    "Flight simulator training",
    "Certified STEM instructors",
    "Industry-standard workshops",
  ];

  return (
    <section className="py-24 bg-bg-soft relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate mb-3 block font-display">
                STEM Excellence
              </span>
              <h2 className="text-3xl font-extrabold text-ink sm:text-5xl tracking-tight mb-6 font-display">
                From curiosity to<br />first flight.
              </h2>
              <p className="text-lg text-slate mb-8 leading-relaxed font-sans">
                We partner with educational institutions to build world-class aeromodelling labs that inspire a lifelong passion for aviation and engineering.
              </p>

              <ul className="space-y-4 mb-10">
                {checklist.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-medium text-ink"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/education"
                className="inline-flex min-h-12 items-center rounded-full bg-blue px-8 py-4 font-bold text-white transition-all hover:bg-blue-600 active:scale-95 shadow-lg shadow-blue/20"
              >
                Plan a STEM lab
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border border-line">
               <Image
                 src="/images/labs-teaser.webp"
                 alt="Students assembling an RC aircraft in an Aeromiles school lab"
                 fill
                 sizes="(min-width: 1024px) 50vw, 100vw"
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
