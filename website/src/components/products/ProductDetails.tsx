"use client";

import { motion } from "framer-motion";
import { Product } from "@/lib/content";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecs from "@/components/products/ProductSpecs";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8"
    >
      {/* Left Column: Gallery */}
      <div className="lg:col-span-7">
        <ProductGallery
          images={product.images || (product.image ? [product.image] : [])}
          altText={product.title}
        />
      </div>

      {/* Right Column: Details */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white",
              product.category === 'plane' && "bg-blue-600",
              product.category === 'drone' && "bg-saffron-500",
              product.category === 'defence' && "bg-navy-900",
            )}>
              {product.categoryLabel}
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-navy-900 mb-4 leading-tight">
            {product.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {product.summary}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href={`/contact?product=${encodeURIComponent(product.title)}`}
            className="px-8 py-4 bg-navy-900 text-white text-center font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-900/20 active:scale-95"
          >
            Inquire About This Product
          </Link>
        </div>

        <div className="mt-8">
          <ProductSpecs specs={product.specs} />
        </div>
      </div>
    </motion.div>
  );
}
