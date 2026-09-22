"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LabProgram } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ProgramSectionProps {
  program: LabProgram;
  index: number;
}

export default function ProgramSection({ program, index }: ProgramSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <section className="py-16 lg:py-24">
      <div className={cn(
        "max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        isEven ? "text-left" : "text-right"
      )}>
        {/* Image/Visual Side */}
        <div className={cn(
          "relative aspect-video rounded-3xl overflow-hidden bg-navy-900/50 border border-line shadow-2xl",
          isEven ? "lg:order-1" : "lg:order-2"
        )}>
          <div className="absolute inset-0 flex items-center justify-center text-slate/40 italic font-display">
            Program Visual: {program.title}
          </div>
          {/* <Image src={program.image} alt={program.title} fill className="object-cover" unoptimized /> */}
        </div>

        {/* Content Side */}
        <div className={cn(
          "flex flex-col gap-6",
          isEven ? "lg:order-2" : "lg:order-1"
        )}>
          <span className="text-blue font-bold uppercase tracking-widest text-sm font-display">
            {program.audience === 'k12' ? 'Schools & Primary' : 'College & University'}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink leading-tight font-display">
            {program.title}
          </h2>
          <p className="text-lg text-slate leading-relaxed font-sans">
            We bridge the gap between theoretical physics and actual flight.
            Our {program.audience === 'k12' ? 'foundational' : 'advanced'}
            curriculum is designed to build intuition, precision, and passion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {program.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue" />
                </div>
                <span className="text-ink font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
