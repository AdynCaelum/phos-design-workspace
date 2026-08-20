import type { Metadata } from "next";
import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ProjectsGallery from "@/components/projects/ProjectsGallery";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Architecture and interior design projects by Phos Design Workspace across residential, commercial, banking, healthcare, institutional, jewellery and hospitality sectors in Maharashtra.",
};

export default function ProjectsPage() {
  return (
    <div className="relative overflow-hidden bg-ground-base pb-28 pt-36">
      {/* Prominent Architectural Bungalow Sketch Overlay */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.35} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <SectionLabel>Portfolio</SectionLabel>
            <span className="rounded bg-terra/20 border border-terra/35 px-2.5 py-0.5 font-mono text-[0.65rem] text-terra-light">
              ARCHIVE 2024–2026
            </span>
          </div>
          <h1 className="mt-5 font-serif text-5xl font-medium text-light-cream md:text-7xl">Projects</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-areia-muted">
            From luxury residences and corporate campuses to bank branches, hospitals and civic landmarks — a selection
            of work delivered across Maharashtra.
          </p>
        </Reveal>
        <div className="mt-14">
          <Suspense>
            <ProjectsGallery />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
