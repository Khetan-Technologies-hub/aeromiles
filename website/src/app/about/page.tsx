import { Metadata } from "next";
import { getTeam } from "@/lib/content";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { TeamGrid } from "@/components/about/TeamGrid";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { AboutCTA } from "@/components/about/AboutCTA";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "About Aeromiles | Pioneering India's Indigenous Aerospace Future",
  description: "Discover how Aeromiles is launching a new era of STEM education through modern aeromodelling labs and advancing national security with cutting-edge UAV capability.",
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