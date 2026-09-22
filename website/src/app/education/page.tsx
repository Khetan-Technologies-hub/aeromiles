import { Metadata } from "next";
import { getLabPrograms } from "@/lib/content";
import { EducationHero } from "@/components/education/EducationHero";
import ProgramSection from "@/components/education/ProgramSection";
import LabOfferingGrid from "@/components/education/LabOfferingGrid";
import { EducationCTA } from "@/components/education/EducationCTA";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "STEM Aeromodelling Labs | Aeromiles",
  description: "Empowering schools and colleges with comprehensive aeromodelling labs, structured curriculum, and industry-grade drone capability.",
};

export default function EducationPage() {
  const programs = getLabPrograms();

  return (
    <main className="min-h-screen bg-white">
      <EducationHero />

      <Section id="programs" variant="default" padding="none" reveal revealDelay={0.1}>
        <div className="relative">
          {programs.map((program, idx) => (
            <Reveal key={program.slug} delay={idx * 0.1}>
              <ProgramSection program={program} index={idx} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section variant="soft" padding="2xl" reveal revealDelay={0.2}>
        <LabOfferingGrid />
      </Section>

      <Section variant="navy" padding="2xl" reveal revealDelay={0.3}>
        <EducationCTA />
      </Section>
    </main>
  );
}
