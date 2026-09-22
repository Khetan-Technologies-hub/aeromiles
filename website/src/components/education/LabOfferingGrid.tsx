"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const OFFERINGS = [
  {
    title: "Structured Curriculum",
    desc: "A phased learning path from basic aerodynamics to complex flight dynamics.",
    icon: "📚",
  },
  {
    title: "Hardware Kits",
    desc: "Precision-engineered aircraft kits and tools for hands-on assembly.",
    icon: "🛠️",
  },
  {
    title: "Teacher Training",
    desc: "Certification programs to empower educators to lead STEM labs confidently.",
    icon: "🎓",
  },
  {
    title: "Technical Support",
    desc: "On-ground and remote assistance for maintenance and troubleshooting.",
    icon: "🎧",
  },
  {
    title: "Competitions",
    desc: "Opportunities to showcase skill in national and international events.",
    icon: "🏆",
  },
  {
    title: "Certification",
    desc: "Industry-recognized certificates upon completion of program milestones.",
    icon: "📜",
  },
];

export default function LabOfferingGrid() {
  return (
    <section className="py-20 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-slate mb-3 block font-display">
            Comprehensive
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mb-4 font-display">The Complete Ecosystem</h2>
          <p className="text-lg text-slate max-w-2xl mx-auto font-sans">
            We don't just provide kits; we provide a comprehensive learning environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERINGS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 bg-navy-900/30 rounded-3xl border border-line backdrop-blur-sm hover:border-blue/50 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-ink mb-3 font-display">{item.title}</h3>
              <p className="text-slate leading-relaxed font-sans">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
