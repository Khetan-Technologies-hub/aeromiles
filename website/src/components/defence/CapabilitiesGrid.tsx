"use client";

import { Reveal } from "@/components/reveal";
import { Card, CardMedia } from "@/components/Card";
import { DefenceCapability } from "@/lib/content";
import Image from "next/image";

interface CapabilitiesGridProps {
  capabilities: DefenceCapability[];
}

const capabilityIcons: Record<string, React.ReactElement> = {
  "Tactical UAVs": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  "ISR Systems": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  "Custom Payload": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  ),
  "Flight Training": (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
};

export function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 id="capabilities" className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
          Mission-ready capabilities
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
          Each capability vertical is engineered from the ground up for operational reliability, indigenous content, and regulatory compliance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilities.map((capability, idx) => (
          <Reveal key={capability.slug} delay={idx * 0.1}>
            <Card hoverLift className="h-full flex flex-col bg-white border-navy/20">
              <CardMedia aspect="square" className="mb-6">
                {capability.title === "ISR & Survey" ? (
                  <Image
                    src="/images/defence/isr.png"
                    alt="ISR & Survey Detail"
                    fill
                    className="object-cover"
                  />
                ) : capability.title === "Quality & Compliance" ? (
                  <Image
                    src="/images/defence/quality.png"
                    alt="Quality & Compliance Detail"
                    fill
                    className="object-cover"
                  />
                ) : capability.title === "Modular Payloads" ? (
                  <Image
                    src="/images/defence/payload.png"
                    alt="Modular Payloads Detail"
                    fill
                    className="object-cover"
                  />
                ) : capability.title === "Lifecycle Support" ? (
                  <Image
                    src="/images/defence/life.png"
                    alt="Lifecycle Support Detail"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <Image
                    src="/images/defence/tactical-uav-capability.png"
                    alt={capability.title}
                    fill
                    className="object-cover"
                  />
                )}
              </CardMedia>
              <h3 className="text-xl font-bold text-navy mb-2">{capability.title}</h3>
              <p className="text-slate leading-relaxed flex-1">{capability.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
}