"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { ArrowRightIcon } from "@/components/icons";

export function DefenceCTA() {
  return (
    <div className="text-center relative">
      {/* Abstract geometric decorations */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

      <Reveal>
        <h2 className="text-3xl font-extrabold text-white sm:text-6xl tracking-tight mb-6">
          Discuss a defence requirement
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/70 mb-10">
          NDA-ready conversations. Direct access to engineering. Response within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full bg-white px-10 py-4 font-bold text-navy shadow-2xl transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-blue-50 active:scale-95"
          >
            Start a conversation
            <ArrowRightIcon className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${CONTACT.email}`}
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white transition-colors hover:bg-white/20 active:scale-95"
          >
            Email us directly
          </a>
        </div>
      </Reveal>

      {/* Trust signals */}
      <Reveal delay={0.2} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/60">
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          NDA-ready
        </span>
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          24hr response
        </span>
        <span className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          Sovereign IP
        </span>
      </Reveal>
    </div>
  );
}