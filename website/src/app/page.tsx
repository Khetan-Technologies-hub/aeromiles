import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { AudiencePaths } from "@/components/audience-paths";
import { ImpactStats } from "@/components/stats";
import { StatsAndMarquee } from "@/components/StatsAndMarquee";
import { FeaturedProducts } from "@/components/featured-products";
import { EngineeringDetail } from "@/components/engineering-detail";
import { EducationTeaser } from "@/components/education-teaser";
import { DefenceTeaser } from "@/components/defence-teaser";
import { FinalCTA } from "@/components/final-cta";
import { getFeaturedProducts, getHomeContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aeromiles | Pioneering RC Planes, Drones & STEM Labs",
  description:
    "Pioneering the next generation of aerospace innovation in India. We provide high-performance RC aircraft, modern STEM labs, and advanced UAV capability for defence.",
  openGraph: {
    title: "Aeromiles | Pioneering RC Planes, Drones & STEM Labs",
    description:
      "Pioneering the next generation of aerospace innovation in India. We provide high-performance RC aircraft, modern STEM labs, and advanced UAV capability for defence.",
    images: [{ url: "/images/home-hero.png" }],
  },
};

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const homeData = getHomeContent();

  return (
    <main id="main" className="flex min-h-dvh flex-col bg-bg">
      <Hero homeData={homeData} />
      <AudiencePaths paths={homeData.audiencePaths} />
      <ImpactStats />
      <StatsAndMarquee />
      <FeaturedProducts products={featuredProducts} />
      <EngineeringDetail />
      <EducationTeaser />
      <DefenceTeaser />
      <FinalCTA />
    </main>
  );
}
