"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import { ShieldIcon, CertificateIcon, IndiaIcon, FileTextIcon } from "./icons";
import { Badge } from "./Badge";

const CAPABILITIES = [
  "Tactical UAVs",
  "ISR Systems",
  "Custom Payload",
  "Flight Training",
];

const COMPLIANCE_BADGES = [
  { label: "ITAR-Free Design", variant: "outline" as const, icon: <ShieldIcon className="h-4 w-4" /> },
  { label: "DGCA Type Certified", variant: "outline" as const, icon: <CertificateIcon className="h-4 w-4" /> },
  { label: "Make in India", variant: "outline" as const, icon: <IndiaIcon className="h-4 w-4" /> },
  { label: "AES-256 Comms", variant: "outline" as const, icon: <FileTextIcon className="h-4 w-4" /> },
];

export function DefenceTeaser() {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal delay={0.2}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <Image
                 src="/images/defence-teaser.webp"
                 alt="An Aeromiles fixed-wing UAV on a field launch rail"
                 fill
                 sizes="(min-width: 1024px) 50vw, 100vw"
                 className="object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl mb-6">
                Capability shaped<br />by the mission.
              </h2>
              <p className="mb-8 max-w-[60ch] text-lg leading-relaxed text-white/85">
                Providing high-reliability unmanned systems and indigenous drone capability designed for rigorous defence and government requirements.
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {CAPABILITIES.map((cap) => (
                  <span key={cap} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
                    {cap}
                  </span>
                ))}
              </div>

              {/* Compliance badges */}
              <div className="mb-8 flex flex-wrap gap-3" role="list" aria-label="Compliance and certifications">
                {COMPLIANCE_BADGES.map((badge, idx) => (
                  <Badge key={badge.label} variant={badge.variant} size="sm" className="gap-1.5" icon={badge.icon}>
                    {badge.label}
                  </Badge>
                ))}
              </div>

              <Link
                href="/defence"
                className="focus-ring-light inline-flex min-h-12 items-center rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white transition-colors hover:bg-white/20 active:scale-95"
              >
                Discuss a requirement
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
