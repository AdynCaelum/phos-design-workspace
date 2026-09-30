"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { ArrowUp, Compass } from "lucide-react";
import { scrollToTarget } from "@/components/SmoothScroll";

export default function ScrollTelemetryHUD() {
  const { scrollYProgress, scrollY } = useScroll();
  const [elevation, setElevation] = useState(0);
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setPercent(Math.round(latest * 100));
      // Map 0 -> 100% to Kolhapur architectural datum: 0m to +569.0m AOD
      setElevation(Number((latest * 569.0).toFixed(1)));
      setVisible(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    scrollToTarget(0, { duration: 1.6 });
  };

  if (!visible) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      aria-label="Scroll telemetry"
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-3 rounded-full border border-areia/25 bg-ground-surface/90 px-4 py-2 shadow-dramatic backdrop-blur-xl font-mono text-[10px] text-light-cream/75 select-none"
    >
      <div className="flex items-center gap-2 border-r border-areia/20 pr-3">
        <span className="h-1.5 w-1.5 rounded-full bg-terra-light animate-pulse" />
        <span className="text-areia font-semibold">ELEV +{elevation}m</span>
      </div>

      <div className="flex items-center gap-2 border-r border-areia/20 pr-3 text-areia-muted">
        <span>{String(percent).padStart(2, "0")}%</span>
        <div className="h-1.5 w-12 rounded-full bg-ground-dark overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-areia to-terra-light transition-all duration-150"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="flex items-center gap-1 text-light-cream hover:text-areia transition-colors cursor-pointer group"
        title="Scroll to top"
      >
        <span className="text-[9px] uppercase tracking-wider text-areia-muted group-hover:text-areia">TOP</span>
        <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 text-areia" />
      </button>
    </motion.aside>
  );
}
