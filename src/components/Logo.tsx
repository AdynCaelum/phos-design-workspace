import Link from "next/link";

export default function Logo({ light = true }: { light?: boolean }) {
  void light; // kept for call-site compatibility — the logo is always ivory/gold on the sage theme
  return (
    <Link href="/" className="group inline-flex flex-col leading-none" aria-label="Phos Design Workspace — Home">
      <span className="font-serif text-[1.7rem] font-medium lowercase tracking-wide text-ivory">
        pho<span className="text-gold-light">s</span>
      </span>
      <span className="mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.32em] text-ivory/70">
        design workspace
      </span>
    </Link>
  );
}
