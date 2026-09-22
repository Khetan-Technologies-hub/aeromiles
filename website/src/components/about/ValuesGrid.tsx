"use client";

import { Reveal } from "@/components/reveal";
import { Card } from "@/components/Card";

const values = [
  {
    title: "Indigenous First",
    description: "Every system is designed and built in India. We believe sovereign capability starts with domestic innovation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Precision Engineering",
    description: "From airframe composites to flight control algorithms — we sweat the details so our customers don't have to.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M12 3v18M3 12h18" />
        <path d="M12 3a6 6 0 0 0-6 6v6" />
        <path d="M12 3a6 6 0 0 1 6 6v6" />
      </svg>
    ),
  },
  {
    title: "Mission Reliability",
    description: "Whether it's a student's first flight or a defence ISR sortie — our systems are engineered to complete the mission.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Knowledge Transfer",
    description: "We don't just deliver hardware — we build capability through training, curriculum, and open documentation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export function ValuesGrid() {
  return (
    <div>
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
            What drives us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
            Four principles that guide every decision — from airfoil selection to partnership agreements.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <Reveal key={value.title} delay={idx * 0.1}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue/10 text-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-slate leading-relaxed">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}