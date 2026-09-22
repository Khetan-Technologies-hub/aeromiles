"use client";

import { Reveal } from "@/components/reveal";
import { Card, CardMedia } from "@/components/Card";
import Image from "next/image";

export function OurStory() {
  const storyItems = [
    {
      year: "Phase 1",
      title: "The Vision",
      description: "Founded with a singular mission: to build high-performance RC aircraft that outperform imported alternatives and advance indigenous design.",
    },
    {
      year: "Phase 2",
      title: "STEM Integration",
      description: "Developing a comprehensive aeromodelling ecosystem combining curriculum, precision kits, and instructor training for educational institutions.",
    },
    {
      year: "Phase 3",
      title: "Strategic Expansion",
      description: "Expanding capabilities into indigenous UAV development for government and defence applications.",
    },
    {
      year: "Phase 4",
      title: "Scaling Innovation",
      description: "Defining the future of flight with a multi-vertical approach—designed, engineered, and built entirely in India.",
    },
  ];

  return (
    <div>
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
            Our Roadmap
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
            From a bold vision of indigenous aerospace to a multi-vertical company — we are redefining flight for the next generation.
          </p>
        </div>
      </Reveal>

      {/* Timeline */}
      <Reveal delay={0.1}>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-line" aria-hidden />
          {storyItems.map((item, idx) => (
            <div key={item.year} className="relative pl-20 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 flex h-16 w-16 items-center justify-center">
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <div className="absolute inset-0 rounded-full border-4 border-navy/10" aria-hidden />
              </div>
              <div className="bg-bg-white rounded-2xl border border-line p-6">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue mb-2">{item.year}</p>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}