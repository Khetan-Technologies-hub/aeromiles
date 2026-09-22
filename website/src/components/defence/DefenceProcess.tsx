"use client";

import { Reveal } from "@/components/reveal";
import { ProcessSteps } from "@/components/ProcessSteps";

export function DefenceProcess() {
  const steps = [
    {
      number: 1,
      title: "Inquiry & Scoping",
      description: "Share your mission requirements. We assess feasibility, regulatory pathway, and indigenous content potential.",
    },
    {
      number: 2,
      title: "Concept & Proposal",
      description: "Our engineering team develops a concept design with performance specs, timeline, and cost estimate.",
    },
    {
      number: 3,
      title: "Prototype & Test",
      description: "Rapid prototyping with iterative flight testing. MIL-STD qualification and user evaluation.",
    },
    {
      number: 4,
      title: "Delivery & Support",
      description: "Production delivery with training, maintenance docs, and long-term sustainment commitment.",
    },
  ];

  return (
    <div>
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
            From requirement to readiness
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
            A structured four-phase process ensures capability matches mission — on schedule, on budget, fully compliant.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <ProcessSteps steps={steps} orientation="horizontal" startDelay={0} staggerDelay={0.1} />
      </Reveal>
    </div>
  );
}