"use client";

import { Reveal } from "@/components/reveal";
import { CertificationGrid } from "@/components/TrustBadges";
import { IndiaIcon, ShieldIcon, FileTextIcon, CheckIcon, PlaneIcon } from "@/components/icons";

export function ComplianceBadges() {
  const certifications = [
    {
      name: "ITAR-Free Design",
      description: "No US export restrictions apply",
      logo: <ShieldIcon className="h-10 w-10 text-blue" />
    },
    {
      name: "DGCA Type Certified",
      description: "Civil aviation regulatory standards",
      logo: <PlaneIcon className="h-10 w-10 text-blue" />
    },
    {
      name: "Make in India",
      description: "Indigenous design & manufacturing",
      logo: <IndiaIcon className="h-10 w-10 text-blue" />
    },
    {
      name: "AES-256 Comms",
      description: "Military-grade data protection",
      logo: <FileTextIcon className="h-10 w-10 text-blue" />
    },
    {
      name: "ISO 9001:2015",
      description: "Quality management systems",
      logo: <CheckIcon className="h-10 w-10 text-blue" />
    },
    {
      name: "End-to-End Testing",
      description: "Qualified to MIL-STD-810G",
      logo: <PlaneIcon className="h-10 w-10 text-blue" />
    },
  ];

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
          Compliance & certifications
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
          Every system meets rigorous regulatory and quality standards — designed, built, and tested in India for sovereign capability.
        </p>
      </div>
      <Reveal>
        <CertificationGrid certifications={certifications} columns={3} />
      </Reveal>
    </div>
  );
}