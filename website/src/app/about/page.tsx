import { Metadata } from "next";
import { getTeam } from "@/lib/content";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { TeamGrid } from "@/components/about/TeamGrid";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Aeromiles | Building India's Next Generation of Flight",
  description: "Learn about Aeromiles' mission to advance indigenous aerospace capability through RC aircraft, STEM labs, and defence UAV systems.",
};

export default function AboutPage() {
  const team = getTeam();

  return (
    <main className="min-h-screen bg-white">
      <AboutHero />

      <Section variant="soft" padding="2xl" reveal revealDelay={0.1}>
        <OurStory />
      </Section>

      <Section variant="default" padding="2xl" reveal revealDelay={0.2}>
        <ValuesGrid />
      </Section>

      <Section variant="muted" padding="2xl" reveal revealDelay={0.3}>
        <TeamGrid team={team} />
      </Section>

      <Section variant="navy" padding="2xl" reveal revealDelay={0.4}>
        <AboutCTA />
      </Section>
    </main>
  );
}