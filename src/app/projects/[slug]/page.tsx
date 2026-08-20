import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import CaseStudyGallery from "@/components/projects/CaseStudyGallery";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";
import { caseStudies, getProject } from "@/data/projects";

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.brief,
    openGraph: { images: [project.images[0]] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.caseStudy) notFound();

  const idx = caseStudies.findIndex((p) => p.slug === slug);
  const prev = caseStudies[(idx - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(idx + 1) % caseStudies.length];

  const facts: [string, string | undefined][] = [
    ["Client", project.client],
    ["Location", project.location],
    ["Sector", project.sector],
    ["Scope", project.scope],
    ["Area", project.area],
    ["Year", project.year],
    ["Status", project.status],
  ];

  return (
    <article className="bg-ground-base">
      {/* Hero */}
      <div className="relative flex h-[72svh] min-h-[440px] items-end overflow-hidden bg-ground-dark">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ground-base via-ground-dark/60 to-ground-dark/40" aria-hidden />
        <ArchitecturalSketchBg variant="bungalow" opacity={0.35} />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 z-10">
          <Reveal y={18}>
            <div className="inline-block rounded-full bg-ground-dark/80 border border-areia/40 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-areia backdrop-blur-md">
              {project.sector}
            </div>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight text-light-cream md:text-6xl drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
              {project.title}
            </h1>
            {project.location && <p className="mt-4 text-sm text-areia-muted">{project.location}</p>}
          </Reveal>
        </div>
      </div>

      {/* Facts + brief */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="glass-card rounded-3xl p-6 md:p-8 border border-areia/25 shadow-elevated">
              <p className="eyebrow mb-4 !text-areia">Project Specs</p>
              <dl className="divide-y divide-areia/15">
                {facts
                  .filter(([, v]) => v)
                  .map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6 py-3.5">
                      <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-areia-muted">{k}</dt>
                      <dd className="text-right text-sm font-medium text-light-cream">{v}</dd>
                    </div>
                  ))}
              </dl>
              {project.services && (
                <div className="mt-8 border-t border-areia/15 pt-6">
                  <p className="eyebrow !text-areia">Services Provided</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.services.map((s) => (
                      <li key={s} className="rounded-full border border-areia/30 bg-ground-dark/60 px-3.5 py-1 text-xs text-light-cream">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-areia/25 shadow-dramatic">
              <p className="font-serif text-2xl font-normal leading-relaxed text-light-cream md:text-[1.7rem] md:leading-[1.5]">
                {project.brief}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Gallery */}
        {project.images.length > 1 && (
          <div className="mt-20 lg:mt-28">
            <CaseStudyGallery images={project.images.slice(1)} title={project.title} />
          </div>
        )}
      </div>

      {/* Prev / next */}
      <nav className="border-t border-areia/20 bg-ground-dark" aria-label="More projects">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
          {[
            { p: prev, label: "Previous project", align: "text-left", arrow: "←" },
            { p: next, label: "Next project", align: "text-right sm:border-l sm:border-areia/20", arrow: "→" },
          ].map(({ p, label, align, arrow }) => (
            <Link
              key={label}
              href={`/projects/${p.slug}`}
              className={`group px-6 py-12 transition-all duration-300 hover:bg-verde/25 lg:px-10 ${align}`}
            >
              <p className="eyebrow !text-areia">{label}</p>
              <p className="mt-3 font-serif text-2xl font-medium text-light-cream transition-colors group-hover:text-areia md:text-3xl">
                {label.startsWith("Previous") ? `${arrow} ${p.title}` : `${p.title} ${arrow}`}
              </p>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
