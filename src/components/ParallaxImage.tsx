"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Curtain wipe + slow scale-in when the image first enters the viewport (default on). */
  reveal?: boolean;
  /** Gradient scrim over the image: darkened bottom for depth, or none. */
  gradient?: "bottom" | "none";
}

/** Image that drifts subtly (±8%) as it scrolls, revealed by a curtain wipe with a gradient scrim. */
export default function ParallaxImage({
  src,
  alt,
  className,
  sizes,
  priority,
  reveal = true,
  gradient = "bottom",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div style={reduced ? undefined : { y }} className="absolute inset-[-10%_0]">
        <motion.div
          initial={reduced || !reveal ? false : { scale: 1.18 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
        </motion.div>
      </motion.div>

      {gradient === "bottom" && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-green-dark/60 via-transparent to-transparent"
          aria-hidden
        />
      )}

      {reveal && !reduced && (
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: "-101%" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="absolute inset-0 z-10 bg-gradient-to-b from-deep-green-dark to-moderate-green-muted"
          aria-hidden
        />
      )}
    </div>
  );
}
