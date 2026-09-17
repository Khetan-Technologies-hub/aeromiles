import { Metadata } from "next";
import { getProducts } from "@/lib/content";
import { ProductGrid } from "@/components/product-grid";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Our Fleet | Aeromiles",
  description: "Explore the Aeromiles range of precision aircraft, tactical drones, and indigenous defence systems.",
};

export default function ProductsPage() {
  const products = getProducts();

  return (
    <main className="min-h-screen bg-bg pb-24">
      {/* Intro Section */}
      <section className="bg-navy text-white py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue mb-4">
              The Fleet
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
              Precision-Engineered<br />Aviation Systems
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 sm:text-xl leading-relaxed">
              From hobbyist RC planes to mission-ready defence UAVs, our systems are designed for reliability, performance, and indigenous innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products Catalog */}
      <section className="container mx-auto px-6 -mt-12">
        <div className="bg-white rounded-3xl shadow-xl border border-line p-6 sm:p-12">
          <ProductGrid products={products} />
        </div>
      </section>
    </main>
  );
}
