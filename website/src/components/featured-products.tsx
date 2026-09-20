"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./reveal";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

interface FeaturedProductsProps {
  products: Product[];
}

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 bg-bg-soft">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy sm:text-5xl tracking-tight">
              Engineered to fly.<br />Designed to evolve.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Reveal key={product.slug} delay={idx * 0.1}>
              <Link
                href={`/products/${product.slug}`}
                className="group block overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-xl"
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
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-2">{product.title}</h3>
                  <p className="text-slate mb-6 leading-relaxed">
                    {product.summary}
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold text-blue-600">
                    View specs
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
