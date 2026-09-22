import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/content";
import { cn } from "@/lib/utils";

interface RelatedProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

export default function RelatedProducts({ currentProduct, allProducts }: RelatedProductsProps) {
  const related = allProducts
    .filter(p => p.category === currentProduct.category && p.slug !== currentProduct.slug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="py-12 border-t border-line mt-12">
      <h3 className="text-2xl font-bold text-ink mb-8 font-display">
        Related {currentProduct.category === 'plane' ? 'Planes' : currentProduct.category === 'drone' ? 'Drones' : 'Capabilities'}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block p-4 rounded-3xl border border-line bg-navy-900/50 backdrop-blur-sm hover:border-blue/50 transition-all duration-500"
          >
            <div className="relative aspect-video mb-4 overflow-hidden rounded-2xl bg-navy-900">
              <Image
                src={product.image || '/placeholder-product.webp'}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <h4 className="font-bold text-ink group-hover:text-blue transition-colors font-display">
              {product.title}
            </h4>
            <p className="text-sm text-slate line-clamp-2 mt-1 font-sans">
              {product.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
