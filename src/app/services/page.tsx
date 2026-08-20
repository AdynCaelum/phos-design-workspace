import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ParallaxImage from "@/components/ParallaxImage";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";
import { services, process } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior design, planning, landscape design, project management, turnkey execution and renovation services by Phos Design Workspace, Kolhapur.",
};

const serviceImages = [
  "/images/projects/valanju-residence/01.jpg",
  "/images/projects/dac-bank-rajarampuri/02.jpg",
  "/images/projects/circuit-bench/01.jpg",
  "/images/projects/collector-residence/01.jpg",
  "/images/projects/circuit-bench/03.jpg",
  "/images/projects/dattajirao-mane-saraf/01.jpg",
  "/images/projects/restaurant-tandulwadi/03.jpg",
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden bg-ground-base pt-36">
      {/* Prominent Architectural Bungalow Sketch */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.32} />

      <section className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <SectionLabel>What We Do</SectionLabel>
            <span className="rounded bg-terra/20 border border-terra/35 px-2.5 py-0.5 font-mono text-[0.65rem] text-terra-light">
              PRACTICE SCOPE
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-tight text-light-cream md:text-7xl">
            From first sketch to final handover.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-areia-muted">
            Seven disciplines, one team — so your project never gets lost between consultants.
          </p>
        </Reveal>

        <div className="mt-20 space-y-20 lg:space-y-28">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <div className="glass-card grid items-center gap-10 rounded-3xl p-6 lg:p-12 border border-areia/25 shadow-dramatic lg:grid-cols-12">
                <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2 lg:col-start-7" : ""}`}>
                  <div className="relative overflow-hidden rounded-2xl shadow-elevated border border-areia/25">
                    <ParallaxImage
                      src={serviceImages[i % serviceImages.length]}
                      alt={s.title}
                      className="aspect-[3/2] w-full"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                  <div className="flex items-center gap-3">
                    <p className="font-serif text-5xl font-light text-areia drop-shadow-[0_2px_8px_rgba(211,199,173,0.4)]">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <span className="h-px flex-1 bg-gradient-to-r from-terra to-transparent" />
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-medium text-light-cream md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-areia-muted">{s.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="relative mt-28 overflow-hidden bg-gradient-to-b from-ground-dark via-verde-surface/70 to-ground-dark py-24 lg:py-32 border-t border-areia/15">
        <ArchitecturalSketchBg variant="process" opacity={0.3} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl font-medium text-light-cream md:text-5xl">The process</h2>
          </Reveal>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.07}>
                <li className="glass-card rounded-3xl p-8 border-t-2 border-t-areia border-areia/20 shadow-elevated transition-all duration-300 hover:-translate-y-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-areia">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-light-cream">{p.step}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-areia-muted">{p.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={0.2}>
            <div className="mt-16">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-gradient-to-r from-areia to-areia-light px-9 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ground-dark shadow-glow-areia transition-all duration-300 hover:scale-105 hover:bg-light-cream"
              >
                Discuss your project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
