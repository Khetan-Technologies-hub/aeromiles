import { Metadata } from "next";
import { getLabPrograms } from "@/lib/content";
import EducationHero from "@/components/education/EducationHero";
import ProgramSection from "@/components/education/ProgramSection";
import LabOfferingGrid from "@/components/education/LabOfferingGrid";
import EducationCTA from "@/components/education/EducationCTA";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "STEM Aeromodelling Labs | Aeromiles",
  description: "Empowering schools and colleges with comprehensive aeromodelling labs, structured curriculum, and industry-grade drone capability.",
};

export default function EducationPage() {
  const programs = getLabPrograms();

  return (
    <main className="min-h-screen bg-bg">
      <EducationHero />

      <div id="programs" className="relative">
        {programs.map((program, idx) => (
          <Reveal key={program.slug}>
            <ProgramSection program={program} index={idx} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <LabOfferingGrid />
      </Reveal>

      <Reveal>
        <EducationCTA />
      </Reveal>
    </main>
  );
}
