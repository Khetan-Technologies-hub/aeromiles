import React from "react";
import { getTeamMembers, TeamMemberSchema } from "@/lib/team";
import { getMilestones } from "@/lib/milestones";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Timeline from "@/components/about/Timeline";

export default async function AboutPage() {
  const team = await getTeamMembers();
  const milestones = (await getMilestones()).map(m => m.metadata);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Aeromiles is dedicated to advancing the frontier of aeromodelling and drone technology in India.
              From empowering students with STEM labs to supporting national security through advanced UAVs,
              we build the tools that take innovation to the skies.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/4" />
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Journey</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              A timeline of the milestones that have shaped Aeromiles and our commitment to aerospace excellence.
            </p>
          </div>
          <Timeline milestones={milestones} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Leadership</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm"
              >
                <div className="relative w-48 h-48 shrink-0 overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                  <Image
                    src={member.metadata.image}
                    alt={member.metadata.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-1">
                    {member.metadata.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.metadata.role}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {member.metadata.bio}
                  </p>
                  {member.metadata.linkedin && (
                    <a
                      href={member.metadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-navy hover:text-blue-600 transition-colors font-medium"
                    >
                      <Linkedin size={18} />
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-8">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Innovation", desc: "Pushing the boundaries of UAV autonomy." },
              { title: "Education", desc: "Inspiring the next generation of aerospace engineers." },
              { title: "Security", desc: "Providing critical capabilities for national safety." },
            ].map((val, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xl font-bold text-navy mb-2">{val.title}</h4>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
