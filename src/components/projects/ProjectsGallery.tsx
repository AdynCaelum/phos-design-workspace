"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Lightbox from "@/components/Lightbox";
import { projects, projectIndex, sectors, type Project, type Sector } from "@/data/projects";

type Filter = "All" | Sector;

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const inner = (
    <div className="group relative overflow-hidden rounded-3xl border border-areia/20 bg-gradient-to-b from-verde-dark/80 via-ground-surface/70 to-ground-dark/90 p-4 transition-all duration-500 hover:border-areia/60 hover:shadow-dramatic hover:-translate-y-2 backdrop-blur-md">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-verde-dark">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        {/* Depth scrim */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ground-dark/80 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-90"
          aria-hidden
        />
        {/* Shine sweep on hover */}
        <div
          className="absolute inset-y-0 -left-3/4 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-light-cream/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[350%]"
          aria-hidden
        />
        <span className="absolute left-3.5 top-3.5 rounded-full border border-areia/30 bg-ground-dark/80 px-3.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-areia backdrop-blur-md">
          {project.sector}
        </span>
      </div>
      <div className="flex items-center justify-between px-2 pt-5 pb-1">
        <div>
          <h3 className="font-serif text-xl font-medium leading-tight text-light-cream group-hover:text-areia transition-colors">
            {project.title}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-areia-muted">
            {project.sector}
            {project.location ? ` · ${project.location}` : ""}
          </p>
        </div>
        <span
          className="flex h-9 w-9 items-center justify-center rounded-full border border-areia/30 bg-ground-dark/50 text-areia transition-all duration-300 group-hover:bg-areia group-hover:text-ground-dark group-hover:translate-x-1 shadow-elevated"
          aria-hidden
        >
          →
        </span>
      </div>
    </div>
  );

  return project.caseStudy ? (
    <Link href={`/projects/${project.slug}`} className="block">
      {inner}
    </Link>
  ) : (
    <button type="button" onClick={() => onOpen(project)} className="block w-full text-left">
      {inner}
    </button>
  );
}

export default function ProjectsGallery() {
  const params = useSearchParams();
  const reduced = useReducedMotion();
  const initial = (params.get("sector") as Filter | null) ?? "All";
  const [filter, setFilter] = useState<Filter>(sectors.includes(initial as Sector) ? initial : "All");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.sector === filter)),
    [filter],
  );

  return (
    <>
      {/* Filters with fluid animated layoutId indicator */}
      <div className="flex flex-wrap gap-2 rounded-full border border-areia/25 bg-ground-dark/80 p-2 backdrop-blur-2xl max-w-fit shadow-elevated">
        {(["All", ...sectors] as Filter[]).map((f) => {
          const isActive = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={isActive}
              className={`relative z-10 px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 rounded-full ${
                isActive ? "text-ground-dark font-bold" : "text-light-cream/80 hover:text-areia"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeFilterPill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-areia to-areia-light shadow-glow-areia"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout={!reduced} className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, idx) => (
            <motion.div
              key={p.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? undefined : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard
                project={p}
                onOpen={(proj) => {
                  setLightboxProject(proj);
                  setLightboxIndex(0);
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Editorial index of further projects */}
      <div className="mt-28 border-t border-areia/20 pt-14">
        <div className="flex items-center gap-4">
          <span className="eyebrow !text-areia">And Many More</span>
          <span className="rule-sage flex-1" aria-hidden />
        </div>
        <div className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(projectIndex).map(([group, items]) => (
            <div key={group} className="glass-card rounded-3xl p-8 border border-areia/20 shadow-elevated">
              <h3 className="font-serif text-2xl font-medium text-light-cream border-b border-areia/20 pb-3">{group}</h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-areia-muted">
                {items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-terra-light text-xs mt-1">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        images={lightboxProject?.images ?? []}
        index={lightboxIndex}
        alt={lightboxProject?.title ?? ""}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
