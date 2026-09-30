"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

let globalLenis: Lenis | null = null;

export function getLenis(): Lenis | null {
  return globalLenis;
}

export function scrollToTarget(
  target: string | number | HTMLElement,
  options?: { duration?: number; offset?: number }
) {
  if (globalLenis) {
    globalLenis.scrollTo(target, options);
  } else if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
  } else if (typeof target === "string") {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Luxurious, weighted cinema-grade architectural scroll inertia
    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.4,
      infinite: false,
    });

    globalLenis = lenis;

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      globalLenis = null;
    };
  }, []);

  return <>{children}</>;
}
