"use client";

import { ReactNode } from "react";
import { Reveal } from "./reveal";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon?: ReactNode;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
  className?: string;
  /** Layout orientation */
  orientation?: "horizontal" | "vertical";
  /** Starting delay for stagger */
  startDelay?: number;
  /** Delay between each step */
  staggerDelay?: number;
}

export function ProcessSteps({
  steps,
  className = "",
  orientation = "horizontal",
  startDelay = 0,
  staggerDelay = 0.1,
}: ProcessStepsProps) {
  if (orientation === "vertical") {
    return (
      <div className={`space-y-12 ${className}`} role="list" aria-label="Process steps">
        {steps.map((step, idx) => (
          <Reveal key={step.number} delay={startDelay + idx * staggerDelay}>
            <div className="flex gap-6" role="listitem">
              <div className="flex-shrink-0 relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-bold text-xl">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute left-1/2 top-12 bottom-0 -translate-x-1/2 w-0.5 bg-line" aria-hidden />
                )}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
                {step.icon && <div className="mt-4">{step.icon}</div>}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className={`${className}`} role="list" aria-label="Process steps">
      <div className="hidden lg:grid grid-cols-4 gap-8">
        {steps.map((step, idx) => (
          <Reveal key={step.number} delay={startDelay + idx * staggerDelay}>
            <div className="text-center" role="listitem">
              <div className="mx-auto mb-6 relative">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy text-white font-bold text-2xl">
                  {step.number}
                </div>
                {idx < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 right-1/2 h-0.5 bg-line -z-10" aria-hidden />
                )}
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
              <p className="text-slate leading-relaxed">{step.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="lg:hidden space-y-8">
        {steps.map((step, idx) => (
          <Reveal key={step.number} delay={startDelay + idx * staggerDelay}>
            <div className="flex gap-6" role="listitem">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-slate leading-relaxed">{step.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}