import Link from "next/link";
import Reveal from "@/components/Reveal";
import ParallaxImage from "@/components/ParallaxImage";
import SectionLabel from "@/components/SectionLabel";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-ground-dark/70 py-24 lg:py-36 border-y border-areia/15">
      {/* Prominent Architectural Bungalow & Villa Sketch Backdrop */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.35} />

      {/* Ambient Lighting Blooms */}
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-terra/25 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-verde/45 blur-[130px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-areia/20 pb-8">
            <div>
              <div className="flex items-center gap-3">
                <SectionLabel>Selected Work</SectionLabel>
                <span className="rounded bg-terra/25 border border-terra/40 px-2.5 py-0.5 text-[0.65rem] font-mono text-terra-light">
                  DWG 02 / RESIDENTIAL & COMMERCIAL
                </span>
              </div>
              <h2 className="mt-4 font-serif text-4xl font-medium text-light-cream md:text-6xl">
                Featured projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-areia/30 bg-ground-base/80 px-6 py-3 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-areia hover:bg-areia hover:text-ground-dark transition-all duration-300 shadow-elevated"
            >
              All projects
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-2" aria-hidden>→</span>
            </Link>
          </div>
        </Reveal>

        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} className="group">
              <Link
                href={`/projects/${p.slug}`}
                className="grid items-center gap-10 lg:grid-cols-12 rounded-3xl p-6 lg:p-10 transition-all duration-500 bg-gradient-to-br from-verde/35 via-ground-surface/60 to-ground-dark/90 hover:border-areia/50 hover:shadow-dramatic border border-areia/20 backdrop-blur-xl"
              >
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2 lg:col-start-6" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-elevated border border-areia/25">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                      <ParallaxImage
                        src={p.images[0]}
                        alt={p.title}
                        className="aspect-[4/3] w-full"
                        sizes="(min-width: 1024px) 58vw, 100vw"
                      />
                    </div>
                    {/* Subtle rim glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(250,247,242,0.3)]" aria-hidden />
                  </div>
                </div>
                <div className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-9"}`}>
                  <div className="flex items-center gap-4">
                    <p className="font-serif text-5xl font-light text-areia drop-shadow-[0_2px_8px_rgba(211,199,173,0.4)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span className="h-px flex-1 bg-gradient-to-r from-terra to-transparent" />
                  </div>
                  <div className="mt-4 inline-block px-3.5 py-1 rounded-full bg-ground-dark/80 border border-areia/30 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-areia">
                    {p.sector}
                  </div>
                  <h3 className="mt-4 font-serif text-3xl font-medium leading-tight text-light-cream group-hover:text-areia transition-colors md:text-4xl">
                    {p.title}
                  </h3>
                  {p.location && <p className="mt-3 text-sm text-areia-muted">{p.location}</p>}
                  <span className="mt-8 inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-terra-light group-hover:text-areia transition-colors">
                    View project
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
