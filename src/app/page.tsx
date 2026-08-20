import Link from "next/link";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Preloader from "@/components/Preloader";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import AnimatedCounter from "@/components/AnimatedCounter";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";
import { services, stats, site } from "@/data/site";
import { sectors } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />

      {/* Intro / The Studio */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ground-dark via-ground-base to-ground-dark py-24 lg:py-36">
        {/* Prominent Architectural Bungalow Sketch */}
        <ArchitecturalSketchBg variant="bungalow" opacity={0.32} />
        
        {/* Ambient background glows */}
        <div
          className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-verde/40 blur-[130px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full bg-terra/20 blur-[100px]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <div className="flex flex-col gap-4">
                <SectionLabel>The Studio</SectionLabel>
                <div className="mt-2 rounded-xl border border-areia/25 bg-ground-surface/70 p-4 backdrop-blur-md">
                  <p className="font-mono text-xs text-terra-light uppercase tracking-wider">DWG: 03 / STUDIO</p>
                  <p className="mt-1 font-serif text-lg text-light-cream">Phos Design Workspace</p>
                  <p className="mt-1 text-xs text-areia-muted">Kolhapur, Maharashtra · Est. 2024</p>
                </div>
              </div>
            </Reveal>
            <div className="lg:col-span-8">
              <Reveal>
                <div className="glass-panel rounded-3xl p-8 md:p-14 border border-areia/25 shadow-dramatic">
                  <p className="font-serif text-3xl font-normal leading-snug text-light-cream md:text-[2.6rem] md:leading-[1.28]">
                    Phos Design Workspace is a multidisciplinary architecture and interior design firm creating spaces
                    that seamlessly integrate <em className="text-areia not-italic font-medium">functionality</em>,{" "}
                    <em className="text-terra-light not-italic font-medium">aesthetics</em> and{" "}
                    <em className="text-azul-light not-italic font-medium">sustainability</em>.
                  </p>
                  <p className="mt-8 text-base leading-relaxed text-light-cream/80">
                    From luxury residences and corporate offices to hospitals, banking institutions and public sector
                    developments — every project is approached with a deep understanding of client requirements,
                    resulting in innovative yet practical design solutions that stand the test of time.
                  </p>
                  <Link
                    href="/about"
                    className="group mt-8 inline-flex items-center gap-3 rounded-full border border-areia/30 bg-ground-dark/60 px-7 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-areia hover:bg-areia hover:text-ground-dark transition-all duration-300 shadow-elevated"
                  >
                    About the studio
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2" aria-hidden>→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* Services strip */}
      <section className="relative overflow-hidden bg-gradient-to-b from-ground-dark via-verde-surface/60 to-ground-dark text-light-cream py-24 lg:py-32">
        <ArchitecturalSketchBg variant="process" opacity={0.28} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 85% 20%, rgba(211,199,173,0.18), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionLabel light>What We Do</SectionLabel>
              <span className="rounded bg-areia/15 border border-areia/30 px-2.5 py-0.5 font-mono text-[0.65rem] text-areia">
                DISCIPLINE SPEC
              </span>
            </div>
            <h2 className="mt-4 max-w-xl font-serif text-4xl font-medium text-light-cream md:text-5xl">
              Every discipline, under one roof
            </h2>
          </Reveal>
          <div className="mt-14 space-y-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <Link
                  href="/services"
                  className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 rounded-2xl border border-areia/20 bg-ground-surface/60 px-7 py-6 transition-all duration-300 hover:border-areia hover:bg-verde/40 hover:shadow-dramatic backdrop-blur-md"
                >
                  <div className="flex items-baseline gap-6">
                    <span className="font-serif text-base font-semibold text-terra-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-2xl font-medium text-light-cream transition-colors group-hover:text-areia md:text-3xl">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="max-w-md text-sm leading-relaxed text-light-cream/70 group-hover:text-light-cream transition-colors">
                      {s.description}
                    </span>
                    <span className="text-areia text-lg transition-transform duration-300 group-hover:translate-x-2 hidden md:inline-block" aria-hidden>
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ground-base via-verde-dark to-ground-dark py-20 lg:py-28 border-y border-areia/15">
        <ArchitecturalSketchBg variant="studio" opacity={0.25} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(50% 60% at 20% 50%, rgba(117,68,55,0.25), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 z-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass-card rounded-3xl p-8 text-center sm:text-left transition-transform duration-300 hover:-translate-y-1.5 border border-areia/25">
                <p className="font-serif text-6xl font-medium text-areia drop-shadow-[0_2px_12px_rgba(211,199,173,0.4)] md:text-7xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-terra-light">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="relative overflow-hidden bg-ground-base py-24 lg:py-32">
        <ArchitecturalSketchBg variant="sectors" opacity={0.32} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
          <Reveal>
            <SectionLabel>Where We Work</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl font-medium text-light-cream md:text-5xl">Sectors</h2>
          </Reveal>
          <div className="mt-12 flex flex-wrap gap-3.5">
            {sectors.map((s, i) => (
              <Reveal key={s} delay={i * 0.05}>
                <Link
                  href={`/projects?sector=${encodeURIComponent(s)}`}
                  className="inline-block rounded-full border border-areia/30 bg-ground-dark/70 backdrop-blur-md px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-light-cream shadow-elevated transition-all duration-300 hover:border-areia hover:bg-areia hover:text-ground-dark hover:shadow-glow-areia hover:-translate-y-1"
                >
                  {s}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-areia/20 bg-gradient-to-b from-ground-base via-ground-dark to-ground-dark py-24 lg:py-32">
        <ArchitecturalSketchBg variant="bungalow" opacity={0.35} />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(55% 70% at 50% 100%, rgba(117,68,55,0.35), transparent 70%)" }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10 z-10">
          <Reveal>
            <p className="eyebrow !text-areia">Start a Project</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl font-medium leading-tight text-light-cream md:text-6xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
              Let&apos;s design something that lasts.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-areia-muted">
              Tell us about your site, your brief and your ambitions — we&apos;ll take it from concept to completion.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-gradient-to-r from-areia to-areia-light px-9 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-ground-dark shadow-glow-areia transition-all duration-300 hover:scale-105 hover:bg-light-cream"
              >
                Get in touch
              </Link>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                className="inline-block rounded-full border border-areia/40 bg-ground-dark/60 backdrop-blur-md px-9 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-light-cream transition-all duration-300 hover:border-areia hover:text-areia hover:-translate-y-0.5"
              >
                {site.phones[0]}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
