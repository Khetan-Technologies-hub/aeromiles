"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";
import { TrustBadges } from "./TrustBadges";
import Link from "next/link";

const HERO_FACTS = [
  "3 flight verticals",
  "K-12 to college labs",
  "India designed & built",
];

const TRUST_BADGES = [
  { label: "ISO 9001:2015", type: "certification" as const },
  { label: "DRDO Partner", type: "partner" as const },
  { label: "Make in India", type: "certification" as const },
  { label: "DGCA Approved", type: "certification" as const },
  { label: "50+ Institutions", type: "stat" as const },
];

export function Hero() {
  const prefersReduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mouse tracking for subtle parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smoothing the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  // Mapping mouse position to a small pixel drift (-20px to 20px)
  const moveX = useTransform(dx, [-0.5, 0.5], [-20, 20]);
  const moveY = useTransform(dy, [-0.5, 0.5], [-20, 20]);

  // The looping background video is decoration: when the viewer prefers
  // reduced motion we freeze it on the first frame and fall back to the
  // poster image. (Aeromiles_Animation_Spec.md — every motion needs a
  // reduced-motion fallback.)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (prefersReduced) {
      video.pause();
      video.removeAttribute("autoplay");
    }
  }, [prefersReduced]);

  function handleMouseMove(e: React.MouseEvent) {
    if (prefersReduced) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  }

  return (
    <section
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-navy"
      onMouseMove={handleMouseMove}
      aria-labelledby="hero-heading"
    >
      {/* Background Video Layer — decorative, muted, poster fallback */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <video
          ref={videoRef}
          autoPlay={!prefersReduced}
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.webp"
          tabIndex={-1}
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-flight.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlay — also the contrast floor for the copy above it.
            Kept dense enough that white/75 body text clears 4.5:1. */}
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/30 to-navy" />
      </div>

      {/* Decorative Blue Circle Motif (Parallaxed) - Kept subtle */}
      <motion.div
        style={prefersReduced ? undefined : { x: moveX, y: moveY }}
        className="pointer-events-none absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-blue/10 blur-[140px]"
        aria-hidden
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-28 text-center text-white">
        <div className="max-w-4xl">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-white">
              Engineered in India · Built for Precision
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Building India&apos;s next
              <br className="hidden sm:block" /> generation of flight
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-white/90 sm:text-xl">
              RC aircraft, drones and hands-on aeromodelling labs—from first
              flight to mission-ready systems.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/products"
                className="focus-ring-light inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue px-10 py-4 font-bold text-white transition-colors hover:bg-blue-600 active:scale-95 sm:w-auto"
              >
                Explore our capabilities
              </Link>
              <Link
                href="/contact"
                className="focus-ring-light inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 active:scale-95 sm:w-auto"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Fact row — in normal flow so it can never overlap the CTAs on short
          or landscape-phone viewports. */}
      <Reveal delay={0.32} className="relative z-10 w-full">
        <ul className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 px-6 pb-10 sm:flex-row sm:gap-x-16">
          {HERO_FACTS.map((fact) => (
            <li key={fact} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                {fact}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Trust Badges — below the fold for credibility */}
      <Reveal delay={0.4} className="relative z-10 w-full pb-10">
        <TrustBadges badges={TRUST_BADGES} variant="grid" />
      </Reveal>
    </section>
  );
}
