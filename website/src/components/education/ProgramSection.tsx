"use client";

import { LabProgram } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProgramSectionProps {
  program: LabProgram;
  index: number;
}

export default function ProgramSection({ program, index }: ProgramSectionProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={cn(
      "py-16 lg:py-24",
      isEven ? "" : "lg:order-2"
    )}>
      <div className={cn(
        "container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        isEven ? "text-left" : "text-right"
      )}>
        {/* Image/Visual Side */}
        <div className={cn(
          "relative aspect-video rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl",
          isEven ? "lg:order-1" : "lg:order-2"
        )}>
          <Image
            src="/images/education/curriculum-action.png"
            alt={program.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content Side */}
        <div className={cn(
          "flex flex-col gap-6",
          isEven ? "lg:order-2" : "lg:order-1"
        )}>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            {program.audience === 'k12' ? 'Schools & Primary' : 'College & University'}
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 leading-tight">
            {program.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We bridge the gap between theoretical physics and actual flight.
            Our {program.audience === 'k12' ? 'foundational' : 'advanced'}
            curriculum is designed to build intuition, precision, and passion.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {program.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                </div>
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
