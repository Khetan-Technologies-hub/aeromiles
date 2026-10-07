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
