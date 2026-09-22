"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";
import { ArrowRightIcon, SchoolIcon, ShieldIcon, PlaneIcon } from "./icons";

type AudiencePath = {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const PATHS: AudiencePath[] = [
  {
    title: "Schools & Colleges",
    description: "Setting up cutting-edge STEM labs and aeromodelling programs for the next generation of engineers.",
    color: "bg-blue/10",
    accentColor: "bg-blue",
    href: "/education",
    icon: SchoolIcon,
  },
  {
    title: "Defence & Govt",
    description: "Providing mission-ready UAV capabilities and indigenous drone technology for national security.",
    color: "bg-green/10",
    accentColor: "bg-green",
    href: "/defence",
    icon: ShieldIcon,
  },
  {
    title: "Aviation Hobbyists",
    description: "High-performance RC aircraft and precision flight systems for the dedicated enthusiast.",
    color: "bg-saffron/10",
    accentColor: "bg-saffron",
    href: "/products",
    icon: PlaneIcon,
  },
];

export function AudiencePaths() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 bg-bg">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight">
              One flight ecosystem.<br />Three ways forward.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PATHS.map((path, idx) => (
            <Reveal key={path.title} delay={idx * 0.1}>
              <motion.div
                whileHover={prefersReduced ? undefined : { y: -8 }}
                className={`group relative flex h-full flex-col rounded-3xl border border-line p-8 transition-shadow hover:shadow-xl ${path.color}`}
              >
                {/* Accent Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl ${path.accentColor}`} />

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-navy">
                  <path.icon className="h-7 w-7" />
                </div>

                <h3 className="text-2xl font-bold text-navy mb-4">{path.title}</h3>
                <p className="mb-8 max-w-[60ch] leading-relaxed text-slate">
                  {path.description}
                </p>

                <Link
                  href={path.href}
                  className="mt-auto inline-flex min-h-11 items-center gap-2 font-bold text-navy"
                >
                  Explore
                  <ArrowRightIcon className="text-blue transition-transform duration-200 group-hover:translate-x-1" />
                  <span className="sr-only">{path.title}</span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
