import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function EducationHero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 lg:py-32 text-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
              STEM Excellence
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              From Curiosity to <span className="text-blue-400">First Flight.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Empowering the next generation of aerospace engineers through
              hands-on aeromodelling labs, structured curriculum, and
              industry-grade drone capability.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#programs"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20"
              >
                Explore Programs
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all backdrop-blur-sm border border-white/20"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
