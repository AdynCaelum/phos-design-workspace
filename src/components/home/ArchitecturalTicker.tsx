"use client";

import { motion } from "motion/react";

const TICKER_ITEMS = [
  "Phos Design Workspace",
  "Architecture & Interior Environments",
  "Kolhapur, Maharashtra",
  "Context-Driven Climatic Design",
  "Residential · Civic · Commercial · Hospitality",
  "From Concept to Physical Space",
  "Material Honesty & Structural Clarity",
  "Full Turnkey Execution Across Maharashtra",
];

export default function ArchitecturalTicker() {
  return (
    <div className="relative w-full overflow-hidden border-y border-areia/20 bg-ground-dark/95 py-3 backdrop-blur-md select-none">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-ground-dark to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-ground-dark to-transparent" />

      <motion.div
        className="flex w-max gap-8 font-sans text-[11px] tracking-[0.22em] uppercase text-light-cream/75"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 38,
        }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="hover:text-areia transition-colors font-medium">{item}</span>
            <span className="h-1 w-1 rounded-full bg-terra-light/80" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
