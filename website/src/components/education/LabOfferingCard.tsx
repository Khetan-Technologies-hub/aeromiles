"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LabProgram } from "@/lib/content";

interface LabOfferingCardProps {
  program: LabProgram;
  index: number;
  icons: Record<string, any>;
}

export function LabOfferingCard({ program, index, icons }: LabOfferingCardProps) {
  const Icon = icons[program.slug] || icons["default"];

  return (
    <div className="p-8 bg-white rounded-3xl border border-line shadow-sm relative">
      <img
        src={program.image || "/images/products/placeholder.webp"}
        alt={program.title}
        className="h-40 w-full object-cover rounded-2xl block"
      />

      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue/10 text-blue-700 my-6">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-display font-bold text-navy mb-3">
        {program.title}
      </h3>
      <p className="text-slate text-sm leading-relaxed mb-6">
        {program.summary}
      </p>
    </div>
  );
}
