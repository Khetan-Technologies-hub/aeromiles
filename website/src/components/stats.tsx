"use client";

import { Reveal } from "./reveal";
import CountUp from "react-countup";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
};

const STATS: StatItem[] = [
  { label: "Aircraft concepts", value: 50, suffix: "+" },
  { label: "Lab modules", value: 12, suffix: "+" },
  { label: "Capability verticals", value: 3 },
  { label: "Shared mission", value: 1 },
];

export function ImpactStats() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-navy-900 py-24 relative overflow-hidden">
      {/* Background Technical Detail */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-blue) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="text-5xl font-bold text-ink mb-3 tabular-nums font-display">
                  {prefersReduced ? (
                    stat.value
                  ) : (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                  <span className="text-blue">{stat.suffix}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate group-hover:text-ink transition-colors font-display">
                  {stat.label}
                </p>
                {/* Small decorative underline */}
                <div className="mt-4 h-1 w-8 bg-blue/30 group-hover:w-12 transition-all duration-300 rounded-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
