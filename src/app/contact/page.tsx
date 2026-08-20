import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/contact/ContactForm";
import ArchitecturalSketchBg from "@/components/ArchitecturalSketchBg";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Phos Design Workspace — ${site.address}. ${site.phones.join(", ")}.`,
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden bg-ground-base pb-28 pt-36">
      {/* Prominent Architectural Bungalow Sketch */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.32} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 z-10">
        <Reveal>
          <div className="flex items-center gap-3">
            <SectionLabel>Get In Touch</SectionLabel>
            <span className="rounded bg-terra/20 border border-terra/35 px-2.5 py-0.5 font-mono text-[0.65rem] text-terra-light">
              INQUIRY &amp; CONSULTATION
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl font-medium leading-tight text-light-cream md:text-7xl">
            Let&apos;s talk about your project.
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div className="glass-panel space-y-8 rounded-3xl p-8 md:p-12 border border-areia/25 shadow-elevated">
              <div>
                <p className="eyebrow !text-areia">Studio</p>
                <p className="mt-3 text-sm leading-relaxed text-light-cream/90">{site.address}</p>
              </div>
              <div>
                <p className="eyebrow !text-areia">Phone</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {site.phones.map((p) => (
                    <li key={p}>
                      <a href={`tel:${p.replace(/\s/g, "")}`} className="text-light-cream/90 transition-colors hover:text-areia">
                        {p}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow !text-areia">Email</p>
                <a href={`mailto:${site.email}`} className="mt-3 block text-sm text-light-cream/90 transition-colors hover:text-areia">
                  {site.email}
                </a>
              </div>
              <div>
                <p className="eyebrow !text-areia">Instagram</p>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block text-sm text-light-cream/90 transition-colors hover:text-areia"
                >
                  {site.instagramHandle}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-areia/25 shadow-dramatic">
            <iframe
              title="Phos Design Workspace on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`}
              className="h-[420px] w-full filter contrast-125 brightness-95"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
