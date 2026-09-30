"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sliders, Compass, Eye, CheckCircle2 } from "lucide-react";
import DimensionGuide from "@/components/drafting/DimensionGuide";

export default function BlueprintCompare() {
  const [sliderPos, setSliderPos] = useState<number>(50); // 50% split by default
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.round((x / rect.width) * 100);
    setSliderPos(percent);
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);

    const onPointerMove = (moveEvent: MouseEvent | TouchEvent) => {
      const moveX = "touches" in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
      handleMove(moveX);
    };

    const onPointerUp = () => {
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };

    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchmove", onPointerMove);
    window.addEventListener("touchend", onPointerUp);
  };

  return (
    <section className="relative overflow-hidden bg-ground-dark py-24 lg:py-32 border-b border-areia/15">
      {/* Background drafting grid */}
      <div className="pointer-events-none absolute inset-0 bg-drafting-grid opacity-25" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-areia/20 pb-8">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.2em] uppercase">
              <span className="font-semibold text-terra-light">Technical Detailing</span>
              <span className="text-light-cream/30">·</span>
              <span className="text-areia-muted">Working Drawings into Built Form</span>
            </div>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl font-medium text-light-cream">
              Precision from drawing to reality
            </h2>
            <p className="mt-2 text-sm text-areia-muted max-w-xl">
              Drag the divider to compare the technical architectural drawings with the completed built residence.
            </p>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-areia/80">
            <Sliders className="h-4 w-4 text-terra-light" />
            <span className="tracking-wider uppercase text-[11px]">Drag to compare</span>
          </div>
        </div>

        {/* Interactive Compare Stage */}
        <div className="mt-12">
          <div
            ref={containerRef}
            onMouseDown={handlePointerDown}
            onTouchStart={handlePointerDown}
            className="group relative h-[440px] sm:h-[580px] w-full select-none overflow-hidden rounded-3xl border border-areia/30 bg-ground-surface shadow-dramatic cursor-ew-resize"
          >
            {/* Background Layer: Final Built Architecture (Right Side) */}
            <div className="absolute inset-0">
              <Image
                src="/images/projects/valanju-residence/01.jpg"
                alt="Valanju Residence — Completed Physical Architecture"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute bottom-6 right-6 z-10 rounded-full border border-areia/25 bg-ground-dark/85 backdrop-blur-xl px-4 py-1.5 text-xs text-light-cream">
                <span className="text-areia font-medium">Built Reality</span> · Valanju Residence
              </div>
            </div>

            {/* Foreground Layer: Technical Architectural Sketch & Working Drawing (Left Side, Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)` }}
            >
              {/* Monochromatic Blueprint Filter over the Render/Drawing */}
              <div className="relative h-full w-full bg-verde-dark">
                <Image
                  src="/images/projects/valanju-residence/02.jpg"
                  alt="Valanju Residence — Working Drawing Tectonics"
                  fill
                  sizes="100vw"
                  className="object-cover filter contrast-125 sepia-[0.3]"
                />
                {/* Architectural Blueprint Matrix Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-drafting-grid opacity-60" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ground-dark/80 via-transparent to-transparent" />
                
                <div className="pointer-events-none absolute bottom-6 left-6 z-10 rounded-full border border-areia/25 bg-ground-dark/85 backdrop-blur-xl px-4 py-1.5 text-xs text-areia">
                  <span className="text-terra-light font-medium">Technical Drawing</span> · Plan Detailing
                </div>
              </div>
            </div>

            {/* Dimension guide overlay at top */}
            <div className="absolute inset-x-6 top-6 z-20 pointer-events-none">
              <DimensionGuide
                label="Valanju Residence · Cantilevered Living Core 28.5m"
                sublabel="Structural Detailing"
                color="areia"
              />
            </div>

            {/* Interactive Dividing Line & Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-gradient-to-b from-areia via-terra-light to-areia shadow-[0_0_16px_rgba(211,199,173,0.8)]"
              style={{ left: `${sliderPos}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-areia bg-ground-dark/95 text-areia shadow-glow-areia backdrop-blur-md">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold font-mono">◀▶</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-areia-muted">
            <div className="flex items-center gap-2">
              <span className="text-terra-light font-medium">Technical Drawing {sliderPos}%</span>
              <span className="text-light-cream/30">/</span>
              <span className="text-areia font-medium">Built Reality {100 - sliderPos}%</span>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span>Site-Supervised Execution</span>
              <span>·</span>
              <span>Kolhapur, Maharashtra</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
