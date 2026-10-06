"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, SchoolIcon, UsersIcon, FileTextIcon } from "./icons";
import { LabOfferingCard } from "./education/LabOfferingCard";
import { LabProgram } from "@/lib/content";

const PROGRAM_ICONS = {
  "k12-lab": SchoolIcon,
  "college-lab": UsersIcon,
  "teacher-training": FileTextIcon,
  "default": FileTextIcon,
};

const CHECKLIST = [
  "Modular aeromodelling kits",
  "Flight simulator training",
  "Certified STEM instructors",
  "Industry-standard workshops",
];

export function EducationTeaser() {
  // In a real app, we would fetch these from content/labs/*.md
  // For the teaser, we use a slightly simplified version of the data
  const programs: LabProgram[] = [
    {
      title: "K–12 STEM Labs",
      slug: "k12-lab",
      audience: "k12",
      summary: "Age-appropriate aeromodelling curriculum aligned with NEP 2020, from glider basics to powered flight.",
      equipment: [],
      benefits: ["Glider & powered RC", "Flight simulators", "Certified instructors"],
      order: 1,
      image: "/images/products/k12-lab.png",
    },
    {
      title: "College & University",
      slug: "college-lab",
      audience: "college",
      summary: "Advanced UAV design, avionics integration, and research-grade platforms for engineering programs.",
      equipment: [],
      benefits: ["Fixed-wing & VTOL", "Autonomous systems", "Industry projects"],
      order: 2,
      image: "/images/products/college.png",
    },
    {
      title: "Teacher Training",
      slug: "teacher-training",
      audience: "college",
      summary: "Certified professional development for educators to deliver hands-on aviation STEM modules.",
      equipment: [],
      benefits: ["Curriculum guides", "Assessment tools", "Ongoing support"],
      order: 3,
      image: "/images/products/teacher.png",
    },
  ];

  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-6">
              From curiosity to<br />first flight.
            </h2>
            <p className="text-lg text-slate mb-8 leading-relaxed max-w-[70ch] mx-auto">
              We partner with educational institutions to build world-class aeromodelling labs that inspire a lifelong passion for aviation and engineering.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, idx) => (
            <LabOfferingCard
              key={program.title}
              program={program}
              index={idx}
              icons={PROGRAM_ICONS}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
