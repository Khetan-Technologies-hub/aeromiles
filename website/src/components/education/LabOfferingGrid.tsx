"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import {
  BookOpenIcon,
  WrenchIcon,
  GraduationCapIcon,
  HeadphonesIcon,
  TrophyIcon,
  FileTextIcon,
} from "@/components/icons";

const OFFERINGS = [
  {
    title: "Structured Curriculum",
    desc: "A phased learning path from basic aerodynamics to complex flight dynamics.",
    icon: BookOpenIcon,
  },
  {
    title: "Hardware Kits",
    desc: "Precision-engineered aircraft kits and tools for hands-on assembly.",
    icon: WrenchIcon,
  },
  {
    title: "Teacher Training",
    desc: "Certification programs to empower educators to lead STEM labs confidently.",
    icon: GraduationCapIcon,
  },
  {
    title: "Technical Support",
    desc: "On-ground and remote assistance for maintenance and troubleshooting.",
    icon: HeadphonesIcon,
  },
  {
    title: "Competitions",
    desc: "Opportunities to showcase skill in national and international events.",
    icon: TrophyIcon,
  },
  {
    title: "Certification",
    desc: "Industry-recognized certificates upon completion of program milestones.",
    icon: FileTextIcon,
  },
];

export default function LabOfferingGrid() {
  return (
    <div>
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">The Complete Ecosystem</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
            We don&apos;t just provide kits; we provide a comprehensive learning environment.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <div className="p-8 bg-white rounded-2xl border border-line shadow-sm hover:shadow-md transition-all group">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
