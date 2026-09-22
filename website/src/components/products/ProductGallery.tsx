"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  altText: string;
}

export default function ProductGallery({ images, altText }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-slate-100 flex items-center justify-center rounded-xl border border-slate-200 text-slate-400">
        No images available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Main Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 border border-slate-200">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[activeIndex]}
              alt={`${altText} - View ${activeIndex + 1}`}
              fill
              className="object-contain p-4"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all",
              activeIndex === idx
                ? "border-blue-600 ring-2 ring-blue-600/20"
                : "border-transparent hover:border-slate-300 bg-slate-50"
            )}
            aria-label={`View image ${idx + 1}`}
          >
            <Image
              src={img}
              alt={`${altText} thumbnail ${idx + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  );
}
