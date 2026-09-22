"use client";

import { Reveal } from "@/components/reveal";
import Link from "next/link";

export function EducationCTA() {
  return (
    <div className="text-center relative">
      {/* Abstract geometric decorations */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue/10 rounded-full blur-3xl pointer-events-none" />

      <Reveal>
        <div className="bg-navy-900 rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Ready to launch your lab?</h2>
            <p className="text-lg lg:text-xl text-slate-300 mb-10 leading-relaxed">
              Whether you are a school principal or a university dean, let&apos;s discuss how to
              integrate a world-class aeromodelling program into your institution.
            </p>
            <Link
              href="/contact?subject=Lab Proposal Request"
              className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-900/40"
            >
              Request a Lab Proposal
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
