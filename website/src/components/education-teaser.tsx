"use client";

import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon, SchoolIcon, UsersIcon, FileTextIcon } from "./icons";
import { Card } from "./Card";

const PROGRAMS = [
  {
    title: "K–12 STEM Labs",
    description: "Age-appropriate aeromodelling curriculum aligned with NEP 2020, from glider basics to powered flight.",
    icon: SchoolIcon,
    features: ["Glider & powered RC", "Flight simulators", "Certified instructors"],
  },
  {
    title: "College & University",
    description: "Advanced UAV design, avionics integration, and research-grade platforms for engineering programs.",
    icon: UsersIcon,
    features: ["Fixed-wing & VTOL", "Autonomous systems", "Industry projects"],
  },
  {
    title: "Teacher Training",
    description: "Certified professional development for educators to deliver hands-on aviation STEM modules.",
    icon: FileTextIcon,
    features: ["Curriculum guides", "Assessment tools", "Ongoing support"],
  },
];

const CHECKLIST = [
  "Modular aeromodelling kits",
  "Flight simulator training",
  "Certified STEM instructors",
  "Industry-standard workshops",
];

export function EducationTeaser() {
  return (
    <section className="py-24 bg-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-6">
                From curiosity to<br />first flight.
              </h2>
              <p className="text-lg text-slate mb-8 leading-relaxed">
                We partner with educational institutions to build world-class aeromodelling labs that inspire a lifelong passion for aviation and engineering.
              </p>

              <ul className="space-y-4 mb-10">
                {CHECKLIST.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-medium text-navy"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue/20 text-blue-600">
                      <CheckIcon />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/education"
                className="inline-flex min-h-12 items-center rounded-full bg-navy px-8 py-4 font-bold text-white transition-colors hover:bg-navy-900 active:scale-95"
              >
                Plan a STEM lab
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Program preview cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PROGRAMS.map((program, idx) => (
                <Card key={program.title} padding="md" className="h-full border-blue/20 hover:border-blue/40 transition-colors">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
                    <program.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-navy mb-2">{program.title}</h3>
                  <p className="text-sm text-slate mb-4">{program.description}</p>
                  <ul className="space-y-1.5 text-xs text-slate">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-blue" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl mt-8 lg:mt-0">
               <Image
                 src="/images/labs-teaser.webp"
                 alt="Students assembling an RC aircraft in an Aeromiles school lab"
                 fill
                 sizes="(min-width: 1024px) 50vw, 100vw"
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
