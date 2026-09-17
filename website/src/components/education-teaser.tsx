"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";

export function EducationTeaser() {
  const checklist = [
    "Modular aeromodelling kits",
    "Flight simulator training",
    "Certified STEM instructors",
    "Industry-standard workshops",
  ];

  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-6">
                From curiosity to<br />first flight.
              </h2>
              <p className="text-lg text-slate mb-8 leading-relaxed">
                We partner with educational institutions to build world-class aeromodelling labs that inspire a lifelong passion for aviation and engineering.
              </p>

              <ul className="space-y-4 mb-10">
                {checklist.map((item, idx) => (
                  <li key={item} className="flex items-center gap-3 text-navy font-medium">
                    <span className="h-5 w-5 rounded-full bg-blue/20 text-blue flex items-center justify-center text-xs">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/education"
                className="inline-flex items-center rounded-full bg-navy px-8 py-4 font-bold text-white transition-all hover:bg-navy-900 active:scale-95"
              >
                Plan a STEM lab
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
               <Image
                 src="/images/labs-teaser.webp"
                 alt="Aeromodelling lab setup"
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
