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
    <div className="py-12 border-t border-slate-200 mt-12">
      <h3 className="text-2xl font-bold text-navy-900 mb-6">Related {currentProduct.category === 'plane' ? 'Planes' : currentProduct.category === 'drone' ? 'Drones' : 'Capabilities'}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group block p-4 rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all bg-white"
          >
            <div className="relative aspect-video mb-4 overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={product.image || '/placeholder-product.webp'}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
            </div>
            <h4 className="font-bold text-navy-900 group-hover:text-blue-600 transition-colors">
              {product.title}
            </h4>
            <p className="text-sm text-slate-600 line-clamp-2 mt-1">
              {product.summary}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
