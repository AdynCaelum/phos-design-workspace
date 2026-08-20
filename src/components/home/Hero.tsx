"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";

const HEADLINE = ["Spaces", "designed", "to", "stand", "the", "test", "of", "time."];

const HERO_SLIDES = [
  {
    image: "/images/hero/hero-court.jpg",
    title: "Circuit Bench Entrance Gateway",
    sector: "Institutional",
    location: "Kolhapur",
    code: "DWG: 01-CIVIC",
  },
  {
    image: "/images/projects/valanju-residence/01.jpg",
    title: "Valanju Luxury Residence",
    sector: "Residential Villa",
    location: "Kolhapur",
    code: "DWG: 02-VILLA",
  },
  {
    image: "/images/projects/dac-bank-rajarampuri/01.jpg",
    title: "DAC Bank, Rajarampuri Branch",
    sector: "Banking",
    location: "Rajarampuri, Kolhapur",
    code: "DWG: 03-BANK",
  },
  {
    image: "/images/projects/collector-residence/01.jpg",
    title: "Collector's Official Residence",
    sector: "Institutional",
    location: "Kolhapur",
    code: "DWG: 04-RESID",
  },
  {
    image: "/images/projects/restaurant-tandulwadi/01.jpg",
    title: "Restaurant at Tandulwadi",
    sector: "Hospitality",
    location: "Tandulwadi, Maharashtra",
    code: "DWG: 05-HOSP",
  },
  {
    image: "/images/projects/dattajirao-mane-saraf/01.jpg",
    title: "Dattajirao Mane Saraf Showroom",
    sector: "Jewellery Retail",
    location: "Kolhapur",
    code: "DWG: 06-JEWEL",
  },
  {
    image: "/images/projects/santulan-kendra/01.jpg",
    title: "Santulan Kendra Healthcare",
    sector: "Healthcare",
    location: "Kolhapur",
    code: "DWG: 07-HEALTH",
  },
  {
    image: "/images/projects/vengurlekar-residence/01.jpg",
    title: "Vengurlekar Konkan Villa",
    sector: "Residential Bungalow",
    location: "Kudal",
    code: "DWG: 08-BUNGALOW",
  },
];

const SLIDE_DURATION = 4200; // 4.2 seconds per slide in continuous auto-loop

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const reduced = useReducedMotion();

  // Continuous auto-loop without any manual button requirements
  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [reduced]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative flex h-svh min-h-[600px] items-end overflow-hidden bg-ground-dark">
      {/* Background Photography Slideshow — Continuous Auto-Looping Crossfade with Ken Burns Zoom */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={`${activeSlide.title} — ${activeSlide.sector}, designed by Phos Design Workspace`}
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover opacity-85"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Multi-layered Scrim: blends photo into the Deep Olive Ground Canvas */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-ground-dark via-ground-base/75 to-ground-dark/45 pointer-events-none"
        aria-hidden
      />

      {/* Prominent Architectural Bungalow & Villa Vector Line-Art Sketch Overlay */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.36} />

      {/* Warm Areia Ambient Glow Bloom: RGB(211, 199, 173) */}
      <motion.div
        animate={reduced ? undefined : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(55% 45% at 75% 25%, rgba(211,199,173,0.35), transparent 70%)" }}
        aria-hidden
      />

      {/* Terra Queimada Ambient Secondary Bloom: RGB(117, 68, 55) */}
      <motion.div
        animate={reduced ? undefined : { opacity: [0.2, 0.42, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50% 40% at 20% 75%, rgba(117,68,55,0.42), transparent 70%)" }}
        aria-hidden
      />

      {/* Minimal Architectural Live Reel Ticker (Top Right — Automatic, Non-interactive) */}
      <div className="absolute top-24 right-6 lg:top-28 lg:right-10 z-20 hidden sm:flex flex-col items-end gap-2 pointer-events-none select-none">
        <motion.div
          key={activeSlide.title}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 rounded-full border border-areia/25 bg-ground-dark/75 backdrop-blur-xl px-4 py-2 shadow-elevated"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-areia animate-pulse" />
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-[0.68rem] text-terra-light font-semibold">
              {String(currentSlide + 1).padStart(2, "0")}/{String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
            <span className="h-3 w-px bg-areia/25" />
            <span className="font-serif text-light-cream text-sm">{activeSlide.title}</span>
            <span className="text-[0.62rem] uppercase tracking-[0.16em] text-areia-muted">({activeSlide.sector})</span>
          </div>
        </motion.div>

        {/* Continuous auto-loop progress indicator lines */}
        <div className="flex items-center gap-1.5 pr-2">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.title}
                className={`h-1 transition-all duration-500 rounded-full ${
                  isActive ? "w-7 bg-areia shadow-glow-areia" : "w-2 bg-areia/25"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10 z-10">
        {/* Dynamic Eyebrow with Active Project Code */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-areia/40 bg-ground-dark/85 backdrop-blur-xl shadow-elevated"
        >
          <span className="h-2 w-2 rounded-full bg-terra-light animate-pulse" />
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-areia">
            Architecture &amp; Interior Design — Kolhapur
          </span>
          <span className="hidden sm:inline-block font-mono text-[0.65rem] text-areia-muted border-l border-areia/30 pl-2.5">
            {activeSlide.code}
          </span>
        </motion.div>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-light-cream md:text-7xl lg:text-8xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
          {HEADLINE.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-top">
              <motion.span
                className="inline-block"
                initial={reduced ? false : { y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.55 + i * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
              {i < HEADLINE.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </h1>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-6"
        >
          <div className="flex items-center gap-6">
            <span className="hidden h-px w-24 bg-gradient-to-r from-terra-light via-areia to-transparent sm:block" aria-hidden />
            <p className="max-w-md text-sm leading-relaxed text-light-cream/90">
              Design, planning, project management and turnkey execution — from concept to completion, across Maharashtra.
            </p>
          </div>

          {/* Mobile slide indicator (Automatic) */}
          <div className="flex sm:hidden items-center gap-2 rounded-full border border-areia/30 bg-ground-dark/80 px-3.5 py-1.5 text-xs text-areia">
            <span className="font-mono text-[0.68rem] text-terra-light">
              {String(currentSlide + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
            </span>
            <span>·</span>
            <span className="truncate max-w-[140px] text-[0.72rem] text-light-cream">{activeSlide.title}</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator on bottom right */}
      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 hidden md:block lg:right-12 z-10"
        aria-hidden
      >
        <motion.div
          animate={reduced ? undefined : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-areia [writing-mode:vertical-lr]">
            Scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-areia to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
