import Link from "next/link";
import SectionLabel from "./SectionLabel";
import ArchitecturalSketchBg from "./ArchitecturalSketchBg";
import { site, services } from "@/data/site";
import { sectors } from "@/data/projects";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "The Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ground-dark text-light-cream border-t border-areia/20">
      {/* Background Architectural Drafting Watermark */}
      <ArchitecturalSketchBg variant="bungalow" opacity={0.25} />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24 z-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="group flex flex-col focus:outline-none">
              <span className="font-serif text-3xl font-light tracking-[0.15em] text-light-cream group-hover:text-areia transition-colors">
                phos
              </span>
              <span className="text-[0.68rem] font-medium tracking-[0.3em] uppercase text-areia-muted group-hover:text-terra-light transition-colors">
                Design Workspace
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-areia-muted">
              Multidisciplinary architecture and interior design studio based in Kolhapur, Maharashtra. Spaces
              crafted for longevity, utility and quiet distinction.
            </p>
            <div className="mt-6">
              <span className="eyebrow !text-areia">Council of Architecture</span>
              <p className="mt-1 text-xs text-areia-muted font-mono">CA/2024/170669 · COA Registered</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 lg:col-start-6">
            <SectionLabel light>Navigation</SectionLabel>
            <ul className="mt-6 space-y-3 text-sm">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-light-cream/75 transition-colors hover:text-areia">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Sectors */}
          <div className="lg:col-span-3">
            <SectionLabel light>Sectors</SectionLabel>
            <ul className="mt-6 space-y-2.5 text-sm">
              {sectors.slice(0, 6).map((sector) => (
                <li key={sector}>
                  <Link
                    href={`/projects?sector=${encodeURIComponent(sector)}`}
                    className="text-light-cream/75 transition-colors hover:text-areia"
                  >
                    {sector}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="lg:col-span-3">
            <SectionLabel light>Studio</SectionLabel>
            <address className="mt-6 not-italic text-sm leading-relaxed text-areia-muted">
              <p className="text-light-cream font-medium">Kolhapur Office</p>
              <p className="mt-1">{site.address}</p>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${site.email}`}
                className="block text-areia-muted transition-colors hover:text-areia"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phones[0].replace(/\s/g, "")}`}
                className="block text-areia-muted transition-colors hover:text-areia"
              >
                {site.phones[0]}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-areia-muted transition-colors hover:text-areia"
              >
                Instagram · {site.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-areia/15 pt-8 text-xs text-areia-muted">
          <p>© {currentYear} Phos Design Workspace. All rights reserved.</p>
          <p className="font-mono text-[0.7rem] text-areia/80">Architecture · Interiors · Project Management · Turnkey Execution</p>
        </div>
      </div>
    </footer>
  );
}
