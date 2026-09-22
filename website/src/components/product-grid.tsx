"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";
import Link from "next/link";
import Image from "next/image";
import type { Product, ProductCategory } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

type CategoryFilter = ProductCategory | "all";

export function ProductGrid({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const prefersReduced = useReducedMotion();

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
      case "plane":
        return "bg-blue/10 text-blue border-blue/30";
      case "drone":
        return "bg-saffron/10 text-saffron border-saffron/30";
      case "defence":
        return "bg-green/10 text-green border-green/30";
      default:
        return "bg-slate/10 text-slate border-slate/30";
    }
  };

  return (
    <div className="space-y-12">
      {/* Filter Bar */}
      <div
        role="group"
        aria-label="Filter platforms by category"
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            aria-pressed={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={[
              "inline-flex min-h-11 items-center rounded-full border px-6 text-sm font-bold transition-all duration-300",
              activeCategory === cat.id
                ? "bg-blue text-white border-blue shadow-lg shadow-blue/30 scale-105"
                : "bg-navy-900/50 text-slate border-line hover:border-blue/50 hover:text-ink backdrop-blur-sm",
            ].join(" ")}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        {filteredProducts.length}{" "}
        {filteredProducts.length === 1 ? "platform" : "platforms"} shown
      </p>

      {/* Products Grid */}
      <motion.div
        layout={!prefersReduced}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, idx) => (
              <motion.div
                layout={!prefersReduced}
                initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                key={product.slug}
              >
                <Reveal delay={idx * 0.05}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="group block h-full overflow-hidden rounded-3xl border border-line bg-navy-900/50 backdrop-blur-sm transition-all duration-500 hover:border-blue/50 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)]"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={prefersReduced ? undefined : { scale: 1.05 }}
                        transition={{ duration: 0.6, ease: [0.16, 0.84, 0.44, 1] }}
                        className="relative h-full w-full"
                      >
                        <Image
                          src={product.image || "/images/placeholder-product.webp"}
                          alt=""
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                      <h3 className="text-xl font-bold text-ink mb-2 font-display">{product.title}</h3>
                      <p className="text-slate mb-6 leading-relaxed line-clamp-2 font-sans">
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

                      <span className="inline-flex items-center gap-2 font-bold text-blue group-hover:text-blue-600 transition-colors">
                        View platform
                        <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
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
