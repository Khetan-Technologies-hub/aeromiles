import Image from "next/image";
import { Product } from "@/lib/content";
import { cn } from "@/lib/utils";

interface ProductSpecsProps {
  specs: { label: string; value: string }[];
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  if (!specs || specs.length === 0) return null;

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-ink mb-6 font-display">Technical Specifications</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-4 rounded-2xl border border-line bg-navy-900/30 backdrop-blur-sm transition-colors hover:bg-navy-900/50"
          >
            <span className="text-sm font-medium text-slate">{spec.label}</span>
            <span className="text-sm font-bold text-ink">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
