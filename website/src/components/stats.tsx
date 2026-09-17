"use client";

import { Reveal } from "./reveal";
import CountUp from "react-countup";
import { motion } from "framer-motion";

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
  return (
    <section className="bg-navy-900 py-20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {STATS.map((stat, idx) => (
            <Reveal key={stat.label} delay={idx * 0.1}>
              <div className="flex flex-col items-center text-center group">
                <div className="text-4xl font-extrabold text-white mb-2 tabular-nums">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span className="text-blue">{stat.suffix}</span>
                </div>
                <p className="text-sm font-medium text-white/50 uppercase tracking-wider group-hover:text-white/80 transition-colors">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
