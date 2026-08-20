import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";
import { principals, memberships, team, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Phos Design Workspace is a multidisciplinary architecture and interior design firm in Kolhapur led by Ar. Parth Mali and ID. Nisha Mali.",
};

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden bg-ground-base pt-36">
      {/* Prominent Architectural Sketch Backdrop */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.32} />

      {/* Story */}
      <section className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <SectionLabel>The Studio</SectionLabel>
            <span className="rounded bg-terra/20 border border-terra/35 px-2.5 py-0.5 font-mono text-[0.65rem] text-terra-light">
              ARCHITECTURAL PRACTICE
            </span>
          </div>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-medium leading-tight text-light-cream md:text-7xl">
            Design with purpose, built to last.
          </h1>
        </Reveal>
        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="space-y-6 text-base leading-relaxed text-light-cream/90">
              <p>{site.description}</p>
              <p className="text-areia-muted">
                The firm is committed to creating spaces that seamlessly integrate functionality, aesthetics,
                sustainability and construction efficiency. Every project is approached with a deep understanding of
                client requirements, resulting in innovative yet practical design solutions that stand the test of
                time.
              </p>
              <p className="text-areia-muted">
                Over the years, Phos Design Workspace has successfully delivered projects ranging from luxury
                residences and commercial establishments to hospitals, banking institutions, educational facilities
                and public sector developments. The firm&apos;s strength lies in its ability to manage projects from
                concept to completion while maintaining the highest standards of quality, transparency and timely
                delivery.
              </p>
              <p className="text-areia-muted">
                With a collaborative design approach and strong technical expertise, the studio continues to build
                lasting relationships with clients by delivering environments that inspire confidence, enhance user
                experience and create long-term value.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
            <div className="glass-card rounded-3xl p-8 border border-areia/25 shadow-elevated">
              <p className="eyebrow !text-areia">Memberships &amp; Affiliations</p>
              <ul className="mt-6 space-y-6">
                {memberships.map((m) => (
                  <li key={m.name} className="border-b border-areia/15 pb-4 last:border-0 last:pb-0">
                    <p className="font-serif text-xl font-medium text-light-cream">{m.name}</p>
                    <p className="mt-1 text-sm tracking-wide text-terra-light">{m.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Principals */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32 z-10">
        <Reveal>
          <SectionLabel>Leadership</SectionLabel>
          <h2 className="mt-5 font-serif text-4xl font-medium text-light-cream md:text-5xl">The principals</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:max-w-4xl">
          {principals.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12}>
              <div className="glass-card group overflow-hidden rounded-3xl p-5 border border-areia/25 shadow-dramatic transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-verde-dark">
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.role}`}
                    fill
                    sizes="(min-width: 640px) 28rem, 100vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ground-dark/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="px-2 pt-5 pb-2">
                  <h3 className="font-serif text-2xl font-medium text-light-cream">{p.name}</h3>
                  <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-areia">{p.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-areia-muted">{p.education}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="relative overflow-hidden bg-ground-dark py-24 lg:py-32 text-light-cream border-t border-areia/15">
        <ArchitecturalSketchBg variant="studio" opacity={0.25} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
          <Reveal>
            <SectionLabel light>The People</SectionLabel>
            <h2 className="mt-5 font-serif text-4xl font-medium text-light-cream md:text-5xl">Team composition</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-3xl border border-areia/20 bg-ground-surface/70 backdrop-blur-2xl shadow-elevated p-6 md:p-8">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-areia/25 text-[0.7rem] uppercase tracking-[0.22em] text-areia">
                    <th className="py-4 pr-6 font-semibold">Name</th>
                    <th className="py-4 pr-6 font-semibold">Designation</th>
                    <th className="py-4 pr-6 font-semibold">Qualification</th>
                    <th className="py-4 font-semibold">Experience</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-areia/10">
                  {team.map((t) => (
                    <tr key={t.name} className="transition-colors hover:bg-verde/30">
                      <td className="py-4 pr-6 font-serif text-lg text-light-cream">{t.name}</td>
                      <td className="py-4 pr-6 text-areia-muted">{t.designation}</td>
                      <td className="py-4 pr-6 text-areia-muted">{t.qualification}</td>
                      <td className="py-4 text-terra-light font-medium">{t.experience}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
