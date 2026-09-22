import { Metadata } from "next";
import { DefenceTeaser } from "@/components/defence-teaser";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Defence & Government Capability | Aeromiles",
  description: "Providing mission-ready UAV systems and indigenous drone capability for national security and government requirements.",
};

export default function DefencePage() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue mb-4 block font-display">
              Sovereign Capability
            </span>
            <h1 className="text-4xl font-extrabold text-ink sm:text-6xl tracking-tight mb-6 font-display">
              Mission-Ready<br />Unmanned Systems
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate sm:text-xl leading-relaxed font-sans">
              Indigenous drone technology designed for the most rigorous environments,
              ensuring strategic autonomy and operational excellence for national security.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="relative">
        <DefenceTeaser />
      </div>

      {/* Placeholder for more detailed capability sections */}
      <section className="py-24 bg-bg-soft">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Tactical ISR", desc: "High-endurance intelligence, surveillance, and reconnaissance systems." },
                { title: "Custom Payloads", desc: "Modular integration of specialized sensors and mission equipment." },
                { title: "Rapid Deployment", desc: "Systems designed for immediate field operation and reliability." },
              ].map((cap, idx) => (
                <div key={idx} className="p-8 rounded-3xl border border-line bg-navy-900/30 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-ink mb-3 font-display">{cap.title}</h3>
                  <p className="text-slate font-sans">{cap.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
