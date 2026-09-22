"use client";

import { motion } from "framer-motion";
import { LabProgram } from "@/lib/content";

interface LabOfferingCardProps {
  program: LabProgram;
  index: number;
  icons: Record<string, any>;
}

export function LabOfferingCard({ program, index, icons }: LabOfferingCardProps) {
  const Icon = icons[program.slug] || icons["default"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
      className="p-8 bg-white rounded-3xl border border-line shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue-700 mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-display font-bold text-navy mb-3">
        {program.title}
      </h3>
      <p className="text-slate text-sm leading-relaxed mb-6">
        {program.summary}
      </p>

      <ul className="space-y-2">
        {program.benefits.slice(0, 3).map((benefit, bIdx) => (
          <li key={bIdx} className="flex items-center gap-2 text-xs text-ink/80">
            <div className="w-1 h-1 bg-blue rounded-full" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
