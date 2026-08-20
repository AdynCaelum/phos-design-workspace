"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

/** One-time-per-session wordmark reveal shown before the home hero. */
export default function Preloader() {
  const [show, setShow] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (sessionStorage.getItem("phos-preloaded")) return;
    sessionStorage.setItem("phos-preloaded", "1");
    setShow(true);
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ground-dark"
          aria-hidden
        >
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-6xl font-medium lowercase text-light-cream md:text-7xl"
            >
              pho<span className="text-areia">s</span>
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute mt-24 text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-areia-muted"
          >
            design workspace
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
