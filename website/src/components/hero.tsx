"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";
import { TrustBadges } from "./TrustBadges";
import Link from "next/link";

export function Hero({ homeData }: { homeData: any }) {
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
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-navy/70" />
      </div>

      <motion.div
        style={prefersReduced ? undefined : { x: moveX, y: moveY }}
        className="pointer-events-none absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-blue/10 blur-[140px]"
        aria-hidden
      />

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
              {homeData.hero.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-white/90 sm:text-xl">
              {homeData.hero.subheadline}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/products"
                className="focus-ring-light inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue px-10 py-4 font-bold text-white transition-colors hover:bg-blue-600 active:scale-95 sm:w-auto"
              >
                Explore Products
              </Link>
              <Link
                href="/contact"
                className="focus-ring-light inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition-colors hover:bg-white/20 active:scale-95 sm:w-auto"
              >
                Request a Proposal
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <Reveal delay={0.32} className="relative z-10 w-full">
        <ul className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-4 px-6 pb-10 sm:flex-row sm:gap-x-16">
          {homeData.hero.facts.map((fact: any, idx: number) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
                {fact.value}: {fact.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.4} className="relative z-10 w-full pb-10">
        <TrustBadges badges={homeData.hero.trustBadges.map((badge: string) => ({ label: badge, type: "certification" as const }))} variant="grid" />
      </Reveal>
    </section>
  );
}
