import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-5 font-serif text-5xl font-medium md:text-6xl">This page doesn&apos;t exist.</h1>
      <Link
        href="/"
        className="mt-10 inline-block bg-gold px-9 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-ivory"
      >
        Back to home
      </Link>
    </div>
  );
}
