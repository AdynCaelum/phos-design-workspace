export default function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <span className={`eyebrow ${light ? "!text-gold-light" : ""}`}>{children}</span>
      <span className={`h-px w-16 ${light ? "bg-gold-light/50" : "bg-gold/50"}`} aria-hidden />
    </div>
  );
}
