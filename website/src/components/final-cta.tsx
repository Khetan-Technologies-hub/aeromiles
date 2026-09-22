"use client";

import { Reveal } from "./reveal";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="py-24 bg-blue relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-white sm:text-6xl tracking-tight mb-10 font-display">
            Let&apos;s build what flies next.
          </h2>
          <Link
            href="/contact"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full bg-navy px-10 py-5 text-lg font-bold text-white shadow-2xl transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-navy-900 active:scale-95"
          >
            Talk to our team
          </Link>
        </Reveal>
      </div>

      {/* Abstract geometric decorations */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-navy/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
