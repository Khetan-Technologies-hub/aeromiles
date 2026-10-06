"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";
import { ArrowRightIcon, SchoolIcon, ShieldIcon, PlaneIcon } from "./icons";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  school: SchoolIcon,
  shield: ShieldIcon,
  plane: PlaneIcon,
};

export function AudiencePaths({ paths }: { paths: any[] }) {
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
          {paths.map((path, idx) => {
            const Icon = ICON_MAP[path.icon] || PlaneIcon;
            return (
              <Reveal key={path.title} delay={idx * 0.1}>
                <motion.div
                  whileHover={prefersReduced ? {} : { y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group relative flex h-full flex-col rounded-3xl border border-line p-8 transition-all duration-300 hover:shadow-2xl bg-white`}
                  aria-labelledby={`path-title-${idx}`}
                >
                  {/* Accent Top Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-3xl transition-colors duration-300 ${path.color}`} />

                  {/* Icon */}
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-navy ring-1 ring-line`}>
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 id={`path-title-${idx}`} className="text-2xl font-bold text-navy mb-4">
                    {path.title}
                  </h3>
                  <p className="mb-8 max-w-[60ch] leading-relaxed text-slate">
                    {path.description}
                  </p>

                  <Link
                    href={path.link}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 font-bold text-navy group-hover:text-blue transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRightIcon className={`transition-transform duration-200 group-hover:translate-x-1 ${path.color.replace('bg-', 'text-')}`} />
                    <span className="sr-only">{path.title}</span>
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
