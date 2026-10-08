import React from "react";
import { getDefencePageData, getDefenceCapabilities } from "@/lib/defence";
import { motion } from "framer-motion";
import { Shield, Eye, Package, ShieldCheck, LifeBuoy } from "lucide-react";

// Map icon strings to Lucide components
const ICON_MAP: Record<string, React.ElementType> = {
  Eye: Eye,
  Package: Package,
  ShieldCheck: ShieldCheck,
  LifeBuoy: LifeBuoy,
  Shield: Shield,
};

export default async function DefencePage() {
  const pageData = await getDefencePageData();
  const capabilities = await getDefenceCapabilities();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {pageData.metadata.hero_title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8">
              {pageData.metadata.hero_subtitle}
            </p>
          </motion.div>
        </div>
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/4" />
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              className="prose prose-lg max-w-none text-slate-600"
              dangerouslySetInnerHTML={{ __html: pageData.content }}
            />
          </motion.div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Strategic Capabilities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => {
              const Icon = ICON_MAP[cap.metadata.icon || "Shield"];
              return (
                <motion.div
                  key={cap.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-slate-200 rounded-2xl hover:border-blue-400 transition-colors bg-white group"
                >
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    {cap.metadata.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {cap.metadata.summary}
                  </p>
                  <div
                    className="text-slate-500 text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: cap.content }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready for Strategic Integration?</h2>
          <p className="text-white/70 mb-10">
            Contact our defence liaisons for a detailed capability briefing and technical consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            Request a Briefing
          </a>
        </div>
      </section>
    </main>
  );
}
