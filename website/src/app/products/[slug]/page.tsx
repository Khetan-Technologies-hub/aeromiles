import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import { getProductBySlug, getProducts } from "@/lib/content";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecs from "@/components/products/ProductSpecs";
import RelatedProducts from "@/components/products/RelatedProducts";
import { cn } from "@/lib/utils";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found | Aeromiles" };

  return {
    title: `${product.title} | Aeromiles`,
    description: product.summary,
    openGraph: {
      title: product.title,
      description: product.summary,
      images: product.image ? [{ url: product.image }] : [],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const allProducts = getProducts();

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 pt-8 pb-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li>
            <Link href="/products" className="hover:text-blue-600 transition-colors">Products</Link>
          </li>
          <li><span className="mx-2">/</span></li>
          <li className="text-slate-900 font-medium truncate max-w-[200px]">
            {product.title}
          </li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-8"
        >
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery
              images={product.image ? [product.image] : []} // In v1 content, we only have one image per product, but gallery is ready for arrays
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

        <RelatedProducts
          currentProduct={product}
          allProducts={allProducts}
        />
      </div>
    </main>
  );
}
