"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import { ClockIcon, FileTextIcon, UsersIcon } from "./icons";

const TRUST_SIGNALS = [
  { label: "24-hour response SLA", icon: ClockIcon },
  { label: "NDA-ready discussions", icon: FileTextIcon },
  { label: "3 verticals, one partner", icon: UsersIcon },
];

export function FinalCTA() {
  return (
    <section className="py-24 bg-blue relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-white sm:text-6xl tracking-tight mb-10">
            Let&apos;s build what flies next.
          </h2>
          <Link
            href="/contact"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full bg-navy px-10 py-5 text-lg font-bold text-white shadow-2xl transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-navy-900 active:scale-95"
          >
            Talk to our team
          </Link>

          {/* Trust signals */}
          <Reveal delay={0.2} className="mt-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-white/80">
              {TRUST_SIGNALS.map((signal, idx) => (
                <div key={signal.label} className="flex items-center gap-3 font-medium">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <signal.icon className="h-5 w-5" />
                  </span>
                  {signal.label}
                </div>
              ))}
            </div>
          </Reveal>
        </Reveal>
      </div>

      {/* Abstract geometric decorations */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
