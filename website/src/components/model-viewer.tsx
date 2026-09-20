"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { use3dCapable } from "@/lib/use-3d-capable";

// The 3D scene (Three.js + R3F) is a heavy client-only chunk — code-split so it
// never lands in the first-load JS. Loaded only when 3D is used and in view.
const ModelScene = dynamic(() => import("./model-scene"), { ssr: false });

type ModelViewerProps = {
  /** GLB/glTF path under public/ (Draco OK). Omit to show the placeholder model. */
  src?: string;
  /** Static image/video shown on mobile, low-power, no-WebGL, or reduced-motion. */
  fallback: ReactNode;
  className?: string;
  autoRotate?: boolean;
  enableZoom?: boolean;
  /** Uniform scale of the model (e.g. larger for a hero backdrop). */
  scale?: number;
  /** Accessible label for the interactive canvas. */
  label?: string;
};

/**
 * Renders an interactive 3D model on capable devices, and a static
 * image/video fallback everywhere else. The 3D engine is lazy-loaded and only
 * mounts once scrolled into view. Text/content must live outside this component
 * (never inside the canvas) so SEO + a11y hold. See CLAUDE.md (3D rule).
 */
export function ModelViewer({
  src,
  fallback,
  className,
  autoRotate = true,
  enableZoom = false,
  scale = 1,
  label = "Interactive 3D model",
}: ModelViewerProps) {
  const capable = use3dCapable();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!capable) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [capable]);

  const show3d = capable && inView;

  return (
    <div
      ref={ref}
      className={className}
      role={show3d ? "img" : undefined}
      aria-label={show3d ? label : undefined}
    >
      {show3d ? (
        <ModelScene
          src={src}
          autoRotate={autoRotate}
          enableZoom={enableZoom}
          scale={scale}
        />
      ) : (
        fallback
      )}
    </div>
  );
}
