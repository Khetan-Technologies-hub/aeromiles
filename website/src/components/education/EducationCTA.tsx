"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EducationCTA() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-navy-900 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden shadow-2xl border border-line">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue/20 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-display">Ready to launch your lab?</h2>
            <p className="text-lg lg:text-xl text-slate mb-10 leading-relaxed font-sans">
              Whether you are a school principal or a university dean, let's discuss how to
              integrate a world-class aeromodelling program into your institution.
            </p>
            <Link
              href="/contact?subject=Lab Proposal Request"
              className="inline-block px-10 py-5 bg-blue hover:bg-blue-600 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue/20"
            >
              Request a Lab Proposal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
