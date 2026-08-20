"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });
  const reduced = useReducedMotion();

  if (reduced) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent pointer-events-none" aria-hidden>
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-areia via-areia-light to-terra-light shadow-[0_0_12px_rgba(211,199,173,0.85)]"
        style={{ scaleX }}
      />
    </div>
  );
}
