"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import DimensionGuide from "@/components/drafting/DimensionGuide";

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

const SHOWCASE_ITEMS = [
  {
    slug: "valanju-residence",
    title: "Valanju Luxury Residence",
    sector: "Residential Villa",
    location: "Kolhapur",
    image: "/images/projects/valanju-residence/01.jpg",
    area: "4,500 sq ft",
    dimensions: "28.5m × 16.2m",
    materials: ["Raw Board Concrete", "Teak Louvers", "Basalt Stone"],
    dwg: "DWG: 01-VALANJU",
  },
  {
    slug: "circuit-bench",
    title: "Circuit Bench Entrance Gateway",
    sector: "Institutional Court",
    location: "Kolhapur",
    image: "/images/hero/hero-court.jpg",
    area: "Monumental Gateway",
    dimensions: "64.0m × 22.8m",
    materials: ["Hand-Dressed Sandstone", "Precast Concrete", "Acoustic Glass"],
    dwg: "DWG: 02-CIRCUIT",
  },
  {
    slug: "dac-bank-rajarampuri",
    title: "DAC Bank Headquarters",
    sector: "Commercial Banking",
    location: "Rajarampuri, Kolhapur",
    image: "/images/projects/dac-bank-rajarampuri/01.jpg",
    area: "1,500 sq ft",
    dimensions: "32.0m × 14.5m",
    materials: ["Anodized Zinc", "Fluted Glass", "Hardwood Millwork"],
    dwg: "DWG: 03-DACBANK",
  },
  {
    slug: "restaurant-tandulwadi",
    title: "Tandulwadi Courtyard Restaurant",
    sector: "Hospitality & Dining",
    location: "Tandulwadi, Maharashtra",
    image: "/images/projects/restaurant-tandulwadi/01.jpg",
    area: "6,200 sq ft",
    dimensions: "36.2m × 18.0m",
    materials: ["Exposed Brick", "Charred Timber", "Micro-Cement"],
    dwg: "DWG: 04-TANDUL",
  },
  {
    slug: "collector-residence",
    title: "Collector's Official Residence",
    sector: "Civic Heritage",
    location: "Kolhapur",
    image: "/images/projects/collector-residence/01.jpg",
    area: "Official Estate",
    dimensions: "44.0m × 28.0m",
    materials: ["Laterite Stone", "Clay Roof Tiles", "Timber Columns"],
    dwg: "DWG: 05-COLLECTOR",
  },
];

export default function HorizontalProjectsScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal glide driven by vertical Lenis scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-62%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[280vh] bg-gradient-to-b from-ground-dark via-ground-base to-ground-dark border-t border-areia/15"
    >
      {/* Sticky viewport frame that pins while user scrolls horizontally */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Subtle background drafting grid and bloom */}
        <div className="pointer-events-none absolute inset-0 bg-drafting-grid opacity-25" />
        <div
          className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-verde/30 blur-[140px]"
          aria-hidden
        />

        {/* Top Header metadata pinned inside the sticky frame */}
        <div className="absolute top-8 left-6 right-6 lg:left-12 lg:right-12 z-20 flex items-center justify-between border-b border-areia/20 pb-4 text-xs text-light-cream/70">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-areia">
              Selected Projects
            </span>
            <span className="text-light-cream/30">/</span>
            <span className="hidden sm:inline text-areia-muted">
              05 Architectural Monographs
            </span>
          </div>

          <div className="flex items-center gap-2 text-areia-muted text-xs">
            <CompassIcon className="h-3.5 w-3.5 text-terra-light" />
            <span className="tracking-wider uppercase text-[10px]">Scroll horizontally</span>
          </div>
        </div>

        {/* Horizontal Filmstrip Cards Track */}
        <motion.div
          style={reduced ? undefined : { x }}
          className="flex gap-8 pl-6 lg:pl-16 pr-16 will-change-transform pt-12"
        >
          {/* Introductory Title Card */}
          <div className="flex h-[68vh] w-[85vw] sm:w-[420px] shrink-0 flex-col justify-between rounded-3xl border border-areia/25 bg-ground-surface/85 p-8 backdrop-blur-xl shadow-dramatic">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-terra-light">
                Studio Archive
              </span>
              <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-medium leading-[1.1] text-light-cream">
                Built Works &amp; Spatial Monographs
              </h2>
              <p className="mt-6 font-sans text-sm leading-relaxed text-light-cream/75">
                Every project is documented through structural materiality, site context, and passive climatic response. Scroll down to browse the commissions.
              </p>
            </div>

            <div className="border-t border-areia/15 pt-6 text-xs text-areia font-medium tracking-wider uppercase">
              <p>Explore projects →</p>
              <p className="text-[10px] text-areia-muted mt-1 font-normal">Kolhapur &amp; Western Maharashtra</p>
            </div>
          </div>

          {/* Project Showcase Cards */}
          {SHOWCASE_ITEMS.map((item, idx) => (
            <article
              key={item.slug}
              className="group relative flex h-[68vh] w-[88vw] sm:w-[580px] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-areia/20 bg-ground-surface/70 p-6 transition-all duration-500 hover:border-areia/60 hover:shadow-dramatic backdrop-blur-xl"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-areia/15 pb-3 text-xs text-areia-muted">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-light text-areia">
                    0{idx + 1}
                  </span>
                  <span className="text-light-cream/30">/</span>
                  <span className="uppercase text-light-cream/80 tracking-wider text-[11px]">{item.sector}</span>
                </div>
                <span className="text-terra-light font-medium text-[11px] tracking-wider">{item.location}</span>
              </div>

              {/* Card Center: High-Resolution Photographic Canvas with Parallax Zoom */}
              <div className="relative mt-4 flex-1 w-full overflow-hidden rounded-2xl border border-areia/20 bg-ground-dark shadow-elevated">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 580px, 88vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Gradient vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ground-dark/90 via-transparent to-transparent opacity-85" />

                {/* Overlaid Dimension Guide */}
                <div className="absolute inset-x-4 bottom-4 z-10">
                  <DimensionGuide
                    label={item.dimensions}
                    sublabel={`${item.area} · ${item.location}`}
                    color="areia"
                  />
                </div>
              </div>

              {/* Card Bottom: Metadata and Navigation */}
              <div className="mt-5 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-light-cream group-hover:text-areia transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-1.5 font-mono text-[9px] text-areia-muted">
                    {item.materials.map((m) => (
                      <span
                        key={m}
                        className="rounded border border-areia/20 bg-ground-dark/70 px-2 py-0.5"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/projects/${item.slug}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-areia/30 bg-ground-dark/80 text-areia transition-all duration-300 group-hover:bg-areia group-hover:text-ground-dark group-hover:scale-110 shadow-elevated"
                  title="View full case study"
                >
                  <ArrowUpRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </article>
          ))}
        </motion.div>

        {/* Bottom Filmstrip Indicator */}
        <div className="absolute bottom-6 left-6 right-6 lg:left-12 lg:right-12 z-20 flex items-center justify-between border-t border-areia/15 pt-3 text-[11px] tracking-wider text-areia-muted">
          <span>Phos Design Workspace · Curated Portfolio</span>
          <span className="text-areia font-medium">01 — 05 Selected Commissions</span>
        </div>
      </div>
    </section>
  );
}
