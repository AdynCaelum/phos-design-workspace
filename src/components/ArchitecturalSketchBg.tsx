"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ArchitecturalSketchBgProps {
  variant?: "bungalow" | "villa" | "hero" | "studio" | "sectors" | "process" | "blueprint";
  className?: string;
  opacity?: number;
}

export default function ArchitecturalSketchBg({
  variant = "bungalow",
  className = "",
  opacity = 0.28,
}: ArchitecturalSketchBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yDrift = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${className}`}
      aria-hidden
      style={{ opacity }}
    >
      <motion.div
        style={reduced ? undefined : { y: yDrift }}
        className="absolute inset-[-10%] w-[120%] h-[120%]"
      >
        <svg
          viewBox="0 0 1600 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Grid Pattern in AREIA #D3C7AD */}
            <pattern id="arch-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D3C7AD" strokeWidth="0.6" strokeDasharray="3 6" strokeOpacity="0.25" />
              <circle cx="80" cy="80" r="1.5" fill="#D3C7AD" fillOpacity="0.35" />
            </pattern>
            {/* Fine Hatching Pattern in AREIA #D3C7AD */}
            <pattern id="hatch-45" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" stroke="#D3C7AD" strokeWidth="0.8" strokeOpacity="0.32" />
            </pattern>
            {/* Terracotta Hatching in TERRA QUEIMADA #754437 */}
            <pattern id="terra-hatch" width="8" height="8" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#754437" strokeWidth="0.8" strokeOpacity="0.4" />
            </pattern>
          </defs>

          {/* Background drafting grid */}
          <rect width="100%" height="100%" fill="url(#arch-grid)" />

          {/* ========================================================================= */}
          {/* 1. BUNGALOW / VILLA SKETCH (Featured on Hero and Featured Projects) */}
          {/* ========================================================================= */}
          {(variant === "bungalow" || variant === "hero") && (
            <g className="stroke-[#D3C7AD]" strokeWidth="1.2">
              {/* Luxury Modern 2-Storey Bungalow Perspective (Right Side) */}
              <g transform="translate(950, 180)">
                {/* Ground Level Concrete Plinth */}
                <polygon points="0,480 520,380 620,440 100,540" fill="url(#hatch-45)" stroke="#D3C7AD" strokeWidth="1.5" />
                
                {/* Main Ground Floor Volume */}
                <polygon points="40,460 380,390 380,240 40,310" stroke="#D3C7AD" strokeWidth="1.8" />
                <polygon points="380,390 540,420 540,270 380,240" stroke="#D3C7AD" strokeWidth="1.8" />
                
                {/* Cantilevered First Floor Box / Master Suite */}
                <polygon points="10,290 350,220 350,90 10,160" stroke="#D3C7AD" strokeWidth="2" />
                <polygon points="350,220 560,250 560,120 350,90" stroke="#D3C7AD" strokeWidth="2" />
                <polygon points="10,160 350,90 560,120 220,190" fill="url(#hatch-45)" stroke="#D3C7AD" strokeWidth="1.5" />

                {/* Overhanging Flat Slab Roof with Timber Louvers in TERRA QUEIMADA #754437 */}
                <polygon points="-20,140 370,60 600,95 210,175" stroke="#754437" strokeWidth="2" />
                <line x1="-20" y1="140" x2="-20" y2="155" stroke="#754437" strokeWidth="1.5" />
                <line x1="370" y1="60" x2="370" y2="75" stroke="#754437" strokeWidth="1.5" />
                <line x1="600" y1="95" x2="600" y2="110" stroke="#754437" strokeWidth="1.5" />
                <polygon points="-20,155 370,75 600,110 210,190" stroke="#754437" strokeWidth="1.5" />

                {/* Vertical Timber Screening / Louvers on First Floor in TERRA QUEIMADA #754437 */}
                {[50, 70, 90, 110, 130, 150, 170, 190, 210, 230].map((x, idx) => (
                  <line
                    key={idx}
                    x1={x}
                    y1={282 - (x * 0.2)}
                    x2={x}
                    y2={152 - (x * 0.2)}
                    stroke="#754437"
                    strokeWidth="1.2"
                    strokeOpacity="0.85"
                  />
                ))}

                {/* Glass Balcony Railing in AZUL #28374A */}
                <polygon points="20,330 330,265 330,225 20,290" stroke="#28374A" strokeWidth="1.2" strokeDasharray="4 2" />
                
                {/* Large Panoramic Glass Sliders in AZUL #28374A */}
                <line x1="60" y1="455" x2="220" y2="422" stroke="#28374A" strokeWidth="1.5" />
                <line x1="60" y1="355" x2="220" y2="322" stroke="#28374A" strokeWidth="1.5" />
                <line x1="60" y1="455" x2="60" y2="355" stroke="#28374A" strokeWidth="1.5" />
                <line x1="140" y1="438" x2="140" y2="338" stroke="#28374A" strokeWidth="1.5" />
                <line x1="220" y1="422" x2="220" y2="322" stroke="#28374A" strokeWidth="1.5" />

                {/* Landscape Rough Tree Sketches in AZUL #28374A */}
                <path d="M -40,490 Q -50,420 -30,360 Q -20,340 -40,320 Q -60,340 -70,300 Q -50,260 -20,280 Q 0,250 20,270 Q 40,290 30,330 Q 10,360 0,420 Q -10,480 -15,500" stroke="#28374A" strokeWidth="1.2" strokeDasharray="3 3" />
                <path d="M 570,450 Q 590,380 610,320 Q 630,300 610,270 Q 640,250 620,220 Q 590,240 570,260 Q 540,270 550,310 Q 560,350 565,420" stroke="#28374A" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Technical Dimension Callouts in TERRA QUEIMADA #754437 */}
                <line x1="-50" y1="140" x2="-50" y2="490" stroke="#754437" strokeWidth="0.8" />
                <line x1="-60" y1="140" x2="-40" y2="140" stroke="#754437" strokeWidth="0.8" />
                <line x1="-60" y1="490" x2="-40" y2="490" stroke="#754437" strokeWidth="0.8" />
                <text x="-95" y="320" fill="#D3C7AD" fontSize="12" fontFamily="monospace" letterSpacing="0.25em" transform="rotate(-90 -95 320)">
                  HT: +8.45M BUNGALOW ELEV
                </text>

                {/* Architectural Stamp */}
                <rect x="260" y="470" width="240" height="60" stroke="#754437" strokeWidth="1" />
                <text x="275" y="490" fill="#FAF7F2" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
                  PHOS RESIDENTIAL VILLA
                </text>
                <text x="275" y="508" fill="#D3C7AD" fontSize="9" fontFamily="monospace" letterSpacing="0.15em">
                  DWG: ARCH-BUNGALOW-2026
                </text>
                <text x="275" y="522" fill="#28374A" fontSize="8" fontFamily="monospace">
                  SCALE: 1:50 · VERIFIED
                </text>
              </g>

              {/* Left Side Architectural Floor Plan Schematic */}
              <g transform="translate(80, 240)">
                <rect x="0" y="0" width="420" height="320" stroke="#D3C7AD" strokeWidth="1.8" />
                <rect x="15" y="15" width="390" height="290" stroke="#D3C7AD" strokeWidth="1" strokeDasharray="2 4" />
                
                {/* Room Partitions */}
                <line x1="0" y1="160" x2="260" y2="160" stroke="#D3C7AD" strokeWidth="1.5" />
                <line x1="260" y1="0" x2="260" y2="320" stroke="#D3C7AD" strokeWidth="1.5" />
                <line x1="140" y1="160" x2="140" y2="320" stroke="#D3C7AD" strokeWidth="1.5" />

                {/* Structural Concrete Columns in TERRA QUEIMADA #754437 */}
                {[0, 260, 420].map((x) =>
                  [0, 160, 320].map((y) => (
                    <rect key={`${x}-${y}`} x={x - 6} y={y - 6} width="12" height="12" fill="#754437" stroke="#FAF7F2" strokeWidth="0.8" />
                  ))
                )}

                {/* Door Swings */}
                <path d="M 60,160 A 50,50 0 0,1 110,210" stroke="#D3C7AD" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="60" y1="160" x2="60" y2="210" stroke="#D3C7AD" strokeWidth="1.2" />

                <path d="M 260,80 A 50,50 0 0,1 210,130" stroke="#D3C7AD" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="260" y1="80" x2="210" y2="80" stroke="#D3C7AD" strokeWidth="1.2" />

                {/* Room Labels */}
                <text x="30" y="70" fill="#FAF7F2" fontSize="11" fontFamily="monospace" letterSpacing="0.18em">
                  LIVING + DINING
                </text>
                <text x="30" y="90" fill="#754437" fontSize="9" fontFamily="monospace">
                  AREA: 38.5 SQ.M
                </text>

                <text x="280" y="70" fill="#FAF7F2" fontSize="11" fontFamily="monospace" letterSpacing="0.18em">
                  MASTER SUITE
                </text>
                <text x="280" y="90" fill="#754437" fontSize="9" fontFamily="monospace">
                  6.40m x 4.80m
                </text>

                <text x="30" y="240" fill="#FAF7F2" fontSize="11" fontFamily="monospace" letterSpacing="0.18em">
                  COURTYARD
                </text>
                <text x="160" y="240" fill="#FAF7F2" fontSize="11" fontFamily="monospace" letterSpacing="0.18em">
                  KITCHEN
                </text>

                {/* Dimension Guides */}
                <line x1="0" y1="-25" x2="420" y2="-25" stroke="#754437" strokeWidth="0.8" />
                <line x1="0" y1="-32" x2="0" y2="-18" stroke="#754437" strokeWidth="0.8" />
                <line x1="420" y1="-32" x2="420" y2="-18" stroke="#754437" strokeWidth="0.8" />
                <text x="180" y="-30" fill="#D3C7AD" fontSize="10" fontFamily="monospace">
                  14.80 M
                </text>
              </g>

              {/* Compass Rose */}
              <g transform="translate(1450, 100)">
                <circle cx="0" cy="0" r="42" stroke="#D3C7AD" strokeWidth="0.8" strokeDasharray="4 4" />
                <polygon points="0,-52 10,0 -10,0" fill="#754437" />
                <polygon points="0,52 8,0 -8,0" fill="#28374A" fillOpacity="0.6" />
                <polygon points="52,0 0,8 0,-8" fill="#D3C7AD" fillOpacity="0.6" />
                <polygon points="-52,0 0,6 0,-6" fill="#D3C7AD" fillOpacity="0.3" />
                <text x="-5" y="-58" fill="#FAF7F2" fontSize="13" fontWeight="bold" fontFamily="serif">N</text>
              </g>
            </g>
          )}

          {/* ========================================================================= */}
          {/* 2. STUDIO / ELEVATION SCHEMATIC */}
          {/* ========================================================================= */}
          {variant === "studio" && (
            <g className="stroke-[#D3C7AD]" strokeWidth="1.2">
              {/* Axonometric Building Cross-Section */}
              <g transform="translate(1000, 150)">
                <polygon points="0,500 350,300 550,420 200,620" stroke="#D3C7AD" strokeWidth="2" fill="url(#hatch-45)" />
                <line x1="0" y1="500" x2="0" y2="180" stroke="#D3C7AD" strokeWidth="2" />
                <line x1="350" y1="300" x2="350" y2="-20" stroke="#D3C7AD" strokeWidth="2" />
                <line x1="550" y1="420" x2="550" y2="100" stroke="#D3C7AD" strokeWidth="2" />
                <line x1="200" y1="620" x2="200" y2="300" stroke="#D3C7AD" strokeWidth="2" />

                {/* Roof Slab */}
                <polygon points="0,180 350,-20 550,100 200,300" stroke="#754437" strokeWidth="2" />

                {/* Floor Slabs */}
                <polygon points="0,290 350,90 550,210 200,410" stroke="#D3C7AD" strokeWidth="1.2" strokeDasharray="3 3" />
                <polygon points="0,400 350,200 550,320 200,520" stroke="#D3C7AD" strokeWidth="1.2" strokeDasharray="3 3" />

                {/* Floor Height Dimension Callout */}
                <line x1="-30" y1="180" x2="-30" y2="500" stroke="#754437" strokeWidth="0.9" />
                <line x1="-40" y1="180" x2="-20" y2="180" stroke="#754437" />
                <line x1="-40" y1="500" x2="-20" y2="500" stroke="#754437" />
                <text x="-70" y="350" fill="#D3C7AD" fontSize="11" fontFamily="monospace" transform="rotate(-90 -70 350)">
                  3-STOREY STRUCTURAL GRID
                </text>
              </g>

              {/* Left Side Architectural Facade Wireframe */}
              <g transform="translate(120, 200)">
                <rect x="0" y="0" width="480" height="380" stroke="#D3C7AD" strokeWidth="2" />
                
                {/* Horizontal Curtain Wall Mullions */}
                <line x1="0" y1="95" x2="480" y2="95" stroke="#D3C7AD" strokeWidth="1.2" />
                <line x1="0" y1="190" x2="480" y2="190" stroke="#D3C7AD" strokeWidth="1.2" />
                <line x1="0" y1="285" x2="480" y2="285" stroke="#D3C7AD" strokeWidth="1.2" />

                {/* Vertical Louvers & Fins in TERRA QUEIMADA #754437 */}
                {[60, 120, 180, 240, 300, 360, 420].map((x) => (
                  <line key={x} x1={x} y1="0" x2={x} y2="380" stroke="#754437" strokeWidth="1" strokeOpacity="0.75" />
                ))}

                {/* Terracotta Feature Wall Inset */}
                <rect x="240" y="95" width="240" height="190" fill="url(#terra-hatch)" stroke="#754437" strokeWidth="1.5" />

                {/* Drafting Labels */}
                <text x="20" y="-20" fill="#FAF7F2" fontSize="12" fontFamily="monospace" letterSpacing="0.2em">
                  NORTH ELEVATION · FAÇADE DETAIL
                </text>
              </g>
            </g>
          )}

          {/* ========================================================================= */}
          {/* 3. SECTORS / GEOMETRIC STRUCTURAL FORMS */}
          {/* ========================================================================= */}
          {variant === "sectors" && (
            <g className="stroke-[#D3C7AD]" strokeWidth="1.2">
              <g transform="translate(100, 150)">
                {/* Geodesic & Pavilion Canopy Wireframe */}
                <polygon points="200,600 500,420 800,550 500,730" stroke="#D3C7AD" strokeWidth="1.8" />
                <polygon points="500,420 500,100 800,230 800,550" stroke="#D3C7AD" strokeWidth="1.8" />
                <polygon points="200,600 200,280 500,100 500,420" stroke="#D3C7AD" strokeWidth="1.8" />

                <polygon points="900,450 1200,320 1450,420 1150,550" stroke="#754437" strokeWidth="1.6" />
                <polygon points="1200,320 1200,80 1450,180 1450,420" stroke="#754437" strokeWidth="1.6" />
                <polygon points="900,450 900,210 1200,80 1200,320" stroke="#754437" strokeWidth="1.6" />

                {/* Radial Sightline Projections in AZUL #28374A */}
                <circle cx="700" cy="400" r="320" stroke="#28374A" strokeWidth="0.9" strokeDasharray="4 6" strokeOpacity="0.5" />
                <circle cx="700" cy="400" r="480" stroke="#28374A" strokeWidth="0.7" strokeDasharray="6 8" strokeOpacity="0.4" />
                <line x1="300" y1="400" x2="1100" y2="400" stroke="#D3C7AD" strokeDasharray="6 6" strokeOpacity="0.4" />
                <line x1="700" y1="0" x2="700" y2="800" stroke="#D3C7AD" strokeDasharray="6 6" strokeOpacity="0.4" />
              </g>
            </g>
          )}

          {/* ========================================================================= */}
          {/* 4. PROCESS / STEPPED MASTERPLAN */}
          {/* ========================================================================= */}
          {variant === "process" && (
            <g className="stroke-[#D3C7AD]" strokeWidth="1.2">
              <path
                d="M 80,750 L 320,750 L 320,600 L 620,600 L 620,450 L 950,450 L 950,300 L 1300,300 L 1300,160 L 1550,160"
                stroke="#754437"
                strokeWidth="2.5"
              />
              {/* Construction Datum Vertical Drops */}
              {[320, 620, 950, 1300].map((x, idx) => (
                <g key={x}>
                  <line x1={x} y1={600 - idx * 150} x2={x} y2="900" stroke="#D3C7AD" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.5" />
                  <rect x={x - 40} y="870" width="80" height="24" fill="#16202C" stroke="#754437" strokeWidth="1" />
                  <text x={x} y="886" fill="#FAF7F2" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    PHASE 0{idx + 1}
                  </text>
                </g>
              ))}
            </g>
          )}

          {/* Scale Bar at Bottom Left on all sketches */}
          <g transform="translate(100, 940)">
            <rect x="0" y="0" width="300" height="6" fill="#D3C7AD" stroke="#FAF7F2" strokeWidth="0.8" />
            <rect x="0" y="0" width="60" height="6" fill="#754437" />
            <rect x="120" y="0" width="60" height="6" fill="#754437" />
            <rect x="240" y="0" width="60" height="6" fill="#754437" />
            <text x="0" y="-8" fill="#D3C7AD" fontSize="9" fontFamily="monospace">0M</text>
            <text x="60" y="-8" fill="#D3C7AD" fontSize="9" fontFamily="monospace">2M</text>
            <text x="180" y="-8" fill="#D3C7AD" fontSize="9" fontFamily="monospace">6M</text>
            <text x="300" y="-8" fill="#D3C7AD" fontSize="9" fontFamily="monospace">10M SCALE</text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
