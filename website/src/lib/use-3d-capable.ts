"use client";

import { useEffect, useState } from "react";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

/**
 * Returns true only when interactive 3D is appropriate for this visitor:
 * WebGL available, motion allowed, a non-phone viewport, and a device with
 * enough cores. Starts `false` (server + first paint) so pages render the
 * static fallback first and progressively upgrade to 3D on capable clients —
 * SSR-safe for the static export, no hydration mismatch. See CLAUDE.md (3D).
 */
export function use3dCapable(minWidth = 768): boolean {
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wide = window.matchMedia(`(min-width: ${minWidth}px)`);

    const cores = navigator.hardwareConcurrency ?? 8;
    const webgl = hasWebGL();

    const compute = () =>
      setCapable(webgl && cores >= 4 && !reduce.matches && wide.matches);
    compute();

    reduce.addEventListener("change", compute);
    wide.addEventListener("change", compute);
    return () => {
      reduce.removeEventListener("change", compute);
      wide.removeEventListener("change", compute);
    };
  }, [minWidth]);

  return capable;
}
