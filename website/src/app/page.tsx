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
    <main id="main" className="flex min-h-dvh flex-col bg-bg">
      <Hero />

      <div className="flex flex-col gap-0">
        {/* High-Impact Entry Point */}
        <section className="w-full">
          <AudiencePaths />
        </section>

        {/* Featured Fleet & Stats Pair */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-8">
            <FeaturedProducts products={featuredProducts} />
          </div>
          <div className="lg:col-span-4 bg-navy-900">
            <ImpactStats />
          </div>
        </div>

        {/* Educational & Defence Core */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7">
            <EducationTeaser />
          </div>
          <div className="lg:col-span-5">
            <DefenceTeaser />
          </div>
        </div>
      </div>

      <FinalCTA />
    </main>
  );
}
