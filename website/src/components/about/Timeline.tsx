"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Milestone {
  date: string;
  title: string;
  description: string;
  category?: string;
}

interface TimelineProps {
  milestones: Milestone[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Company: "bg-slate-500",
  Education: "bg-blue-600",
  Product: "bg-blue-400",
  Defence: "bg-navy",
};

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      {/* Vertical Line - Hidden on mobile, shifted on desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 hidden md:block" />

      <div className="space-y-12">
        {milestones.map((milestone, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal group">
            {/* Dot Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 z-10 hidden md:block" />

            <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} w-full`}>
              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-[10px] uppercase tracking-wider font-bold text-white px-2 py-0.5 rounded-full ${CATEGORY_COLORS[milestone.category || "Company"]}`}>
                    {milestone.category || "Milestone"}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">{milestone.date}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{milestone.title}</h3>
                <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
              </motion.div>

              {/* Mobile Dot */}
              <div className="md:hidden w-full flex justify-center py-4">
                <div className="w-3 h-3 rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
