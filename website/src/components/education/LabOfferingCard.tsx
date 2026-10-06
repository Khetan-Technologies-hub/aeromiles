"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LabProgram } from "@/lib/content";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

interface LabOfferingCardProps {
  program: LabProgram;
  index: number;
  icons: Record<string, any>;
}

export function LabOfferingCard({ program, index, icons }: LabOfferingCardProps) {
  const Icon = icons[program.slug] || icons["default"];
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={prefersReduced ? {} : { y: -12, scale: 1.02 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + (index * 0.1),
        y: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative flex h-full flex-col rounded-3xl border border-line p-8 transition-all duration-300 hover:shadow-2xl bg-white overflow-hidden"
    >
      {/* Accent Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-blue" />

      {/* Image Header */}
      <div className="relative h-48 w-full mb-6 overflow-hidden rounded-2xl">
        <img
          src={program.image || "/images/products/placeholder.webp"}
          alt={program.title}
          className="absolute inset-0 h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm text-navy ring-1 ring-line">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-2xl font-bold text-navy mb-4">
        {program.title}
      </h3>
      <p className="mb-8 max-w-[60ch] leading-relaxed text-slate">
        {program.summary}
      </p>

      <Link
        href={`/education#${program.slug}`}
        className="mt-auto inline-flex min-h-11 items-center gap-2 font-bold text-navy group-hover:text-blue transition-colors duration-200"
      >
        Learn More
        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1 text-blue" />
        <span className="sr-only">{program.title}</span>
      </Link>
    </motion.div>
  );
}
