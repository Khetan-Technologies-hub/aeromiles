"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";

export function Hero() {
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

  function handleMouseMove(e: React.MouseEvent) {
    // Normalize mouse position to range [-0.5, 0.5]
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth) - 0.5);
    mouseY.set((clientY / innerHeight) - 0.5);
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-navy"
      onMouseMove={handleMouseMove}
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.webp"
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/videos/hero-flight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Navy Gradient Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/40 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-transparent to-navy/60" />
      </div>

      {/* Decorative Blue Circle Motif (Parallaxed) */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-blue/20 blur-[120px] pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue">
              Engineered in India · Built for Precision
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
              Building India&apos;s next<br className="hidden sm:block" /> generation of flight
            </h1>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl">
              RC aircraft, drones and hands-on aeromodelling labs—from first flight to mission-ready systems.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/products"
                className="group relative overflow-hidden rounded-full bg-blue px-8 py-4 font-bold transition-all hover:bg-blue-600 active:scale-95"
              >
                <span className="relative z-10">Explore our capabilities</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/5 px-8 py-4 font-bold backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stat Row */}
        <Reveal delay={0.9}>
          <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-x-12">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              <span className="text-sm font-medium text-white/60 uppercase tracking-wider">3 Flight verticals</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              <span className="text-sm font-medium text-white/60 uppercase tracking-wider">K-12 to college labs</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" />
              <span className="text-sm font-medium text-white/60 uppercase tracking-wider">India Designed & built</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
