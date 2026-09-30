"use client";

import React from "react";

interface DimensionGuideProps {
  label: string;
  sublabel?: string;
  color?: "areia" | "terra" | "azul" | "cream";
  className?: string;
}

export default function DimensionGuide({
  label,
  sublabel,
  color = "areia",
  className = "",
}: DimensionGuideProps) {
  const colorMap = {
    areia: {
      line: "border-areia/40",
      text: "text-areia",
      tick: "bg-areia/60",
      pill: "border-areia/30 bg-ground-dark/85 text-areia",
    },
    terra: {
      line: "border-terra-light/40",
      text: "text-terra-light",
      tick: "bg-terra-light/60",
      pill: "border-terra-light/30 bg-ground-dark/85 text-terra-light",
    },
    azul: {
      line: "border-azul-light/40",
      text: "text-azul-light",
      tick: "bg-azul-light/60",
      pill: "border-azul-light/30 bg-ground-dark/85 text-azul-light",
    },
    cream: {
      line: "border-light-cream/40",
      text: "text-light-cream",
      tick: "bg-light-cream/60",
      pill: "border-light-cream/30 bg-ground-dark/85 text-light-cream",
    },
  };

  const scheme = colorMap[color] || colorMap.areia;

  return (
    <div
      className={`relative flex w-full select-none items-center font-mono text-[10px] tracking-wider ${className}`}
      aria-hidden="true"
    >
      {/* Left CAD witness tick (45 deg angle slash) */}
      <div className="relative flex items-center">
        <div className={`h-3 w-[1.5px] rotate-45 ${scheme.tick}`} />
        <div className={`h-2 w-[1px] ${scheme.tick} -ml-[1px]`} />
      </div>

      {/* Left dimension projection line */}
      <div className={`h-[1px] flex-1 border-b border-dashed ${scheme.line}`} />

      {/* Center dimension readout badge */}
      <div
        className={`mx-2 flex shrink-0 items-center gap-2 rounded border px-2.5 py-0.5 backdrop-blur-md shadow-sm ${scheme.pill}`}
      >
        <span className="font-semibold uppercase tracking-widest">{label}</span>
        {sublabel && (
          <span className="border-l border-areia/20 pl-2 text-areia-muted">
            {sublabel}
          </span>
        )}
      </div>

      {/* Right dimension projection line */}
      <div className={`h-[1px] flex-1 border-b border-dashed ${scheme.line}`} />

      {/* Right CAD witness tick */}
      <div className="relative flex items-center">
        <div className={`h-2 w-[1px] ${scheme.tick} -mr-[1px]`} />
        <div className={`h-3 w-[1.5px] rotate-45 ${scheme.tick}`} />
      </div>
    </div>
  );
}
