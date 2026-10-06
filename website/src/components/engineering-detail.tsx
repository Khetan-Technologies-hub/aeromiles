"use client";

import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { Check } from "lucide-react";

export function EngineeringDetail() {
  const keyPoints = [
    "Aerospace Grade Materials",
    "Precision CNC Machining",
    "Rigorous Stress Testing",
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Image */}
          <Reveal className="relative group">
            <div className="relative z-10 overflow-hidden rounded-3xl border-4 border-[#1b8ee6]/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/images/innovation-detail.png"
                alt="Precision engineering detail of Aeromiles aircraft"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Subtle accent background glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#1b8ee6]/10 to-transparent rounded-[2rem] blur-2xl -z-10" />
          </Reveal>

          {/* Right Side: Content */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#1b8ee6]/10 border border-[#1b8ee6]/20 w-fit">
                <span className="text-xs font-bold tracking-wider text-[#1b8ee6] uppercase">
                  Precision Engineering
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0e2a4d] leading-tight">
                Indigenous Innovation in Every Micron
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 leading-relaxed">
                We don't just assemble; we engineer. From precision-milled aerospace
                aluminum to high-modulus carbon fiber, our components are designed
                for extreme reliability in the most demanding environments.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-4">
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                {keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[#0e2a4d] font-medium"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1b8ee6] flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
