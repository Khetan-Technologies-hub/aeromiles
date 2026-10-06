"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckIcon, SchoolIcon, UsersIcon, CertificateIcon } from "@/components/icons";
import { LabProgram } from "@/lib/content";
import { LabOfferingCard } from "./LabOfferingCard";

interface EducationLabOfferingsProps {
  programs: LabProgram[];
}

export default function EducationLabOfferings({ programs }: EducationLabOfferingsProps) {
  const programIcons: Record<string, any> = {
    "k12-lab": SchoolIcon,
    "college-lab": UsersIcon,
    "teacher-training": CertificateIcon,
    "default": CertificateIcon,
  };

  const displayedPrograms = [...programs];
  const hasTeacherTraining = programs.some(p => p.title.toLowerCase().includes("teacher"));
  if (!hasTeacherTraining) {
    displayedPrograms.push({
      title: "Teacher Training",
      slug: "teacher-training",
      audience: "college",
      summary: "Certification programs to empower educators to lead STEM labs confidently.",
      equipment: [],
      benefits: ["Curriculum guidance", "Lab management tools", "Pedagogical support"],
      image: "/images/products/placeholder.webp",
      order: 3,
    });
  }

  return (
    <section className="py-24 bg-bg-soft overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Value Prop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-navy leading-tight">
                Turn Your Institution Into A <span className="text-blue">STEM Powerhouse</span>
              </h2>
              <p className="text-lg text-slate leading-relaxed max-w-xl">
                Our turn-key aeromodelling labs bridge the gap between theoretical physics and real-world engineering,
                equipping students with industry-standard skills in UAV design and flight.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Full-stack hardware & software integration",
                "Curriculum-aligned project milestones",
                "Industry-recognized certification paths",
                "End-to-end installation & setup support"
              ].map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                  className="flex items-start gap-3 text-ink font-medium"
                >
                  <div className="mt-1 flex-shrink-0 p-1 bg-blue-700/10 rounded-full text-blue-700">
                    <CheckIcon className="w-4 h-4" />
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy text-white font-bold rounded-lg hover:bg-navy-900 transition-colors group focus-ring-light"
              >
                Plan a STEM lab
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Program Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <LabOfferingCard
              program={{
                title: "Test K-12 Lab",
                slug: "k12-program",
                audience: "k12",
                summary: "This is a hardcoded test to see if images load.",
                equipment: [],
                benefits: ["Test 1", "Test 2"],
                image: "/images/products/k12-lab.png",
                order: 1,
              }}
              index={0}
              icons={programIcons}
            />
            {displayedPrograms.slice(0, 2).map((program, idx) => (
              <LabOfferingCard
                key={program.slug}
                program={program}
                index={idx + 1}
                icons={programIcons}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
