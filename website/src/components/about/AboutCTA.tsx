"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export function AboutCTA() {
  return (
    <div className="text-center relative">
      {/* Abstract geometric decorations */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

      <Reveal>
        <h2 className="text-3xl font-extrabold text-white sm:text-6xl tracking-tight mb-6">
          Let&apos;s build what flies next.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white/70 mb-10">
          Whether you&apos;re setting up a STEM lab, procuring defence UAVs, or chasing the perfect flight &mdash; we&apos;re ready to talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full bg-white px-10 py-4 font-bold text-navy shadow-2xl transition-[background-color,transform] duration-200 hover:scale-105 hover:bg-blue-50 active:scale-95"
          >
            Start a conversation
            <ArrowRightIcon className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/about"
            className="focus-ring-light inline-flex min-h-12 items-center rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white transition-colors hover:bg-white/20 active:scale-95"
          >
            Learn more about us
          </Link>
        </div>
      </Reveal>
    </div>
  );
}