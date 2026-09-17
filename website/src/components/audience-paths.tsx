"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";

type AudiencePath = {
  title: string;
  description: string;
  color: string;
  accentColor: string;
  href: string;
};

const PATHS: AudiencePath[] = [
  {
    title: "Schools & Colleges",
    description: "Setting up cutting-edge STEM labs and aeromodelling programs for the next generation of engineers.",
    color: "bg-blue/10",
    accentColor: "bg-blue",
    href: "/education",
  },
  {
    title: "Defence & Govt",
    description: "Providing mission-ready UAV capabilities and indigenous drone technology for national security.",
    color: "bg-green/10",
    accentColor: "bg-green",
    href: "/defence",
  },
  {
    title: "Aviation Hobbyists",
    description: "High-performance RC aircraft and precision flight systems for the dedicated enthusiast.",
    color: "bg-saffron/10",
    accentColor: "bg-saffron",
    href: "/products",
  },
];

export function AudiencePaths() {
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
                whileHover={{ y: -10 }}
                className={`relative group p-8 rounded-3xl border border-line transition-all hover:shadow-xl ${path.color}`}
              >
                {/* Accent Top Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl ${path.accentColor}`} />

                <h3 className="text-2xl font-bold text-navy mb-4">{path.title}</h3>
                <p className="text-slate mb-8 leading-relaxed">
                  {path.description}
                </p>

                <Link
                  href={path.href}
                  className="inline-flex items-center font-bold text-navy hover:gap-2 transition-all gap-1"
                >
                  Explore <span className="text-blue">→</span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
