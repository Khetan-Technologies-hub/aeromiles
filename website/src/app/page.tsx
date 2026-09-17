import { Hero } from "@/components/hero";
import { AudiencePaths } from "@/components/audience-paths";
import { ImpactStats } from "@/components/stats";
import { FeaturedProducts } from "@/components/featured-products";
import { EducationTeaser } from "@/components/education-teaser";
import { DefenceTeaser } from "@/components/defence-teaser";
import { FinalCTA } from "@/components/final-cta";
import { getFeaturedProducts } from "@/lib/content";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="flex min-h-dvh flex-col bg-bg">
      <Hero />
      <AudiencePaths />
      <ImpactStats />
      <FeaturedProducts products={featuredProducts} />
      <EducationTeaser />
      <DefenceTeaser />
      <FinalCTA />
    </main>
  );
}
