import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getProductBySlug, getProducts } from "@/lib/content";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecs from "@/components/products/ProductSpecs";
import RelatedProducts from "@/components/products/RelatedProducts";
import { cn } from "@/lib/utils";
import { ProductDetails } from "@/components/products/ProductDetails";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
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
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = getProducts();

  return (
    <main className="min-h-screen bg-white pb-20 pt-24">
      <div className="container mx-auto px-6">
        <ProductDetails product={product} />

        <RelatedProducts
          currentProduct={product}
          allProducts={allProducts}
        />
      </div>
    </main>
  );
}
