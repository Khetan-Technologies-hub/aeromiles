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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-4">The Complete Ecosystem</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
              className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
