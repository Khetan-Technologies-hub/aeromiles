"use client";

import { Reveal } from "@/components/reveal";
import { Card, CardMedia } from "@/components/Card";
import Image from "next/image";
import { TeamMember } from "@/lib/content";

interface TeamGridProps {
  team: TeamMember[];
}

export function TeamGrid({ team }: TeamGridProps) {
  if (team.length === 0) {
    return (
      <div>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
              Our team
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
              Meet the engineers, educators, and aviators behind Aeromiles.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Placeholder team members */}
            {[
              { name: "Founder & CEO", role: "Aerospace Engineer" },
              { name: "CTO", role: "Flight Systems" },
              { name: "Head of Education", role: "STEM Curriculum" },
              { name: "Defence Lead", role: "UAV Systems" },
            ].map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <Card className="h-full text-center">
                  <CardMedia aspect="square" className="mb-6 mx-auto max-w-[160px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-navy/10 flex items-center justify-center">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/30" aria-hidden>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M12 14c-4.97 0-9 4.03-9 9v1h18v-1c0-4.97-4.03-9-9-9z" />
                      </svg>
                    </div>
                  </CardMedia>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue mb-1">{member.role}</p>
                  <h3 className="text-lg font-bold text-navy mb-1">{member.name}</h3>
                  <p className="text-slate text-sm">Bio coming soon</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div>
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight mb-4">
            Our team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate leading-relaxed">
            Meet the engineers, educators, and aviators behind Aeromiles.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <Reveal key={member.slug} delay={idx * 0.1}>
              <Card className="h-full text-center">
                <CardMedia aspect="square" className="mb-6 mx-auto max-w-[160px]">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="160px"
                      className="object-cover rounded-full"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-navy/10 flex items-center justify-center rounded-full">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-navy/30" aria-hidden>
                        <circle cx="12" cy="8" r="4" />
                        <path d="M12 14c-4.97 0-9 4.03-9 9v1h18v-1c0-4.97-4.03-9-9-9z" />
                      </svg>
                    </div>
                  )}
                </CardMedia>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue mb-1">{member.role}</p>
                <h3 className="text-lg font-bold text-navy mb-2">{member.name}</h3>
                <p className="text-slate text-sm leading-relaxed">{member.bio}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}