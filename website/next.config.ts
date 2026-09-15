import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a plain static site to `out/`,
  // which is uploaded to Hostinger `public_html`. No SSR / API routes.
  output: "export",

  // No image-optimization server on static hosting — ship pre-optimized assets.
  images: { unoptimized: true },

  // Emit `route/index.html` so Apache serves clean URLs (e.g. /about/).
  trailingSlash: true,
};

export default nextConfig;
