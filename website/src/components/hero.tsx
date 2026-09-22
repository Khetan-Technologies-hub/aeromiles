"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./reveal";
import Link from "next/link";

const HERO_FACTS = [
  "3 flight verticals",
  "K-12 to college labs",
  "India designed & built",
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
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-navy-900"
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
          className="h-full w-full object-cover scale-105"
        >
          <source src="/videos/hero-flight.mp4" type="video/mp4" />
        </video>

        {/* Cinematic overlay — enhanced for better depth */}
        <div className="absolute inset-0 bg-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/20 to-navy-900" />

        {/* Engineering Grid Overlay: Subtle technical feel */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Decorative Blue Circle Motif (Parallaxed) */}
      <motion.div
        style={prefersReduced ? undefined : { x: moveX, y: moveY }}
        className="pointer-events-none absolute -right-20 -top-20 h-[800px] w-[800px] rounded-full bg-blue/15 blur-[160px]"
        aria-hidden
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-10 pt-28 text-center text-ink">
        <div className="max-w-4xl">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-blue font-display">
              Engineered in India · Built for Precision
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl lg:text-8xl font-display"
            >
              Building India&apos;s next
              <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-white/50">generation of flight</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-lg font-medium text-slate sm:text-xl font-sans leading-relaxed">
              RC aircraft, drones and hands-on aeromodelling labs—from first
              flight to mission-ready systems.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Link
                href="/products"
                className="focus-ring-light inline-flex min-h-12 w-full items-center justify-center rounded-full bg-blue px-10 py-4 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 sm:w-auto"
              >
                Explore our capabilities
              </Link>
              <Link
                href="/contact"
                className="focus-ring-light inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-10 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95 sm:w-auto"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Fact row */}
      <Reveal delay={0.32} className="relative z-10 w-full">
        <ul className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-6 px-6 pb-16 sm:flex-row sm:gap-x-20">
          {HERO_FACTS.map((fact) => (
            <li key={fact} className="flex items-center gap-3 group">
              <span className="h-1.5 w-1.5 rounded-full bg-blue group-hover:scale-150 transition-transform duration-300" aria-hidden />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate group-hover:text-ink transition-colors font-display">
                {fact}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
