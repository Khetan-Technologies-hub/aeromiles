"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Reveal } from "./reveal";
import { ModelViewer } from "./model-viewer";
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
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  }

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-navy"
      onMouseMove={handleMouseMove}
    >
      {/* Background layer: the flight video always plays as the base; on capable
          desktops the interactive 3D model is layered on top of it (transparent
          canvas). Mobile / low-power / no-WebGL / reduced-motion show the video
          alone. Handled by <ModelViewer> from #21. */}
      <div className="absolute inset-0 z-0">
        {/* Base: flying video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero-flight.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 3D model layered over the video (renders nothing when not capable) */}
        <ModelViewer
          className="absolute inset-0 h-full w-full"
          label="Interactive 3D model of an aircraft"
          scale={1.7}
          fallback={null}
        />

        {/* Scrim — darker at top (header) and bottom (stat row), lighter in the
            middle so the video + 3D read through; pointer-events-none so drag
            reaches the canvas. A soft radial keeps the headline legible. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/35 to-navy/95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_72%_52%_at_50%_46%,rgba(8,27,52,0.9),transparent_72%)]" />
      </div>

      {/* Decorative Blue Circle Motif (Parallaxed) - Kept subtle */}
      <motion.div
        style={{ x: moveX, y: moveY }}
        className="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-blue/10 blur-[140px] pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue mb-4">
              Engineered in India · Built for Precision
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl leading-[1.1]">
              Building India&apos;s next
              <br className="hidden sm:block" /> generation of flight
            </h1>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-white/70 sm:text-xl font-medium">
              RC aircraft, drones and hands-on aeromodelling labs—from first
              flight to mission-ready systems.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="/products"
                className="group relative overflow-hidden rounded-full bg-blue px-10 py-4 font-bold transition-all hover:bg-blue-600 active:scale-95"
              >
                <span className="relative z-10">Explore our capabilities</span>
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/10 px-10 py-4 font-bold backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
              >
                Talk to our team
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stat Row */}
        <Reveal delay={0.9}>
          <div className="absolute bottom-12 left-0 right-0 flex flex-col items-center justify-center gap-6 px-6 sm:flex-row sm:gap-x-16">
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-blue" />
              <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">
                3 Flight verticals
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-blue" />
              <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">
                K-12 to college labs
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-1 w-1 rounded-full bg-blue" />
              <span className="text-xs font-bold text-white/50 uppercase tracking-[0.2em]">
                India Designed & built
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
