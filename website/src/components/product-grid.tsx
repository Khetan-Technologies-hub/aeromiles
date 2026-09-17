"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import type { Product, ProductCategory } from "@/lib/content";

type CategoryFilter = ProductCategory | "all";

export function ProductGrid({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: "all", label: "All" },
    { id: "plane", label: "Planes" },
    { id: "drone", label: "Drones" },
    { id: "defence", label: "Defence" },
  ];

  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter(p => p.category === activeCategory);

  const getCategoryColor = (cat: ProductCategory) => {
    switch (cat) {
      case "plane": return "bg-blue/10 text-blue border-blue/20";
      case "drone": return "bg-saffron/10 text-saffron border-saffron/20";
      case "defence": return "bg-green/10 text-green border-green/20";
      default: return "bg-slate/10 text-slate border-slate/20";
    }
  };

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={[
              "px-6 py-2 rounded-full text-sm font-bold transition-all border",
              activeCategory === cat.id
                ? "bg-blue text-white border-blue shadow-lg shadow-blue/30"
                : "bg-white text-slate border-line hover:border-blue/50 hover:text-navy",
            ].join(" ")}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.slug}
              >
                <Reveal delay={idx * 0.05}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-line transition-all hover:shadow-xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
                        className="h-full w-full"
                      >
                        <Image
                          src={product.image || "/images/placeholder-product.webp"}
                          alt={product.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(product.category)}`}>
                          {product.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-xl font-bold text-navy mb-2">{product.title}</h3>
                      <p className="text-slate mb-6 leading-relaxed line-clamp-2">
                        {product.summary}
                      </p>

                      {product.specs.length > 0 && (
                        <div className="mb-6 space-y-1">
                          {product.specs.slice(0, 3).map((spec, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2 text-xs text-slate">
                              <span className="h-1 w-1 rounded-full bg-blue" />
                              <span className="font-medium">{spec.label}:</span> {spec.value}
                            </div>
                          ))}
                        </div>
                      )}

                      <span className="inline-flex items-center font-bold text-blue group-hover:gap-2 transition-all gap-1">
                        View platform <span className="text-blue">→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate text-lg">No platforms found in this category.</p>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
