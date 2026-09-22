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
      <div className="aspect-square bg-navy-900/50 flex items-center justify-center rounded-3xl border border-line text-slate">
        No images available
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Main Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-navy-900/30 border border-line group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full"
          >
            <Image
              src={images[activeIndex]}
              alt={`${altText} - View ${activeIndex + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={cn(
              "relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-300",
              activeIndex === idx
                ? "border-blue shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105"
                : "border-transparent hover:border-line/50 bg-navy-900/50"
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
