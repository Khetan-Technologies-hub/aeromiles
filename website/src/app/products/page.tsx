import { Metadata } from "next";
import { getProducts } from "@/lib/content";
import { ProductGrid } from "@/components/product-grid";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Fleet",
  description: "Explore the Aeromiles range of precision aircraft, tactical drones, and indigenous defence systems.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main id="main" className="min-h-dvh bg-bg pb-24">
      {/* Intro Section */}
      <section className="bg-navy-900 text-white py-24 sm:py-32 relative overflow-hidden">
        {/* Subtle ambient light */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue mb-4 font-display">
              The Fleet
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 font-display">
              Precision-Engineered<br />Aviation Systems
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate sm:text-xl leading-relaxed font-sans">
              From hobbyist RC planes to mission-ready defence UAVs, our systems are designed for reliability, performance, and indigenous innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="container mx-auto px-6 -mt-12">
        <div className="bg-navy-900/40 backdrop-blur-md rounded-3xl shadow-2xl border border-line p-6 sm:p-12">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
