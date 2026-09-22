import { Metadata } from "next";
import { getDefenceCapabilities } from "@/lib/content";
import { DefenceHero } from "@/components/defence/DefenceHero";
import { CapabilitiesGrid } from "@/components/defence/CapabilitiesGrid";
import { ComplianceBadges } from "@/components/defence/ComplianceBadges";
import { DefenceProcess } from "@/components/defence/DefenceProcess";
import { DefenceCTA } from "@/components/defence/DefenceCTA";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Defence & Government UAV Capabilities | Aeromiles",
  description: "High-reliability unmanned systems and indigenous drone capability designed for rigorous defence and government requirements.",
};

export default function DefencePage() {
  const capabilities = getDefenceCapabilities();

  return (
    <main className="min-h-screen bg-white">
      <DefenceHero />

      <Section variant="soft" padding="2xl" reveal revealDelay={0.1}>
        <CapabilitiesGrid capabilities={capabilities} />
      </Section>

      <Section variant="default" padding="2xl" reveal revealDelay={0.2}>
        <ComplianceBadges />
      </Section>

      <Section variant="muted" padding="2xl" reveal revealDelay={0.3}>
        <DefenceProcess />
      </Section>

      <Section variant="navy" padding="2xl" reveal revealDelay={0.4}>
        <DefenceCTA />
      </Section>
    </main>
  );
}