"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-500 ${
        scrolled
          ? "bg-ground-dark/85 backdrop-blur-xl border-b border-areia/20 shadow-[0_8px_32px_rgba(8,14,20,0.7)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="group flex flex-col focus:outline-none">
          <span className="font-serif text-2xl font-light tracking-[0.15em] text-light-cream group-hover:text-areia transition-colors">
            phos
          </span>
          <span className="text-[0.6rem] font-medium tracking-[0.3em] uppercase text-areia-muted group-hover:text-terra-light transition-colors">
            Design Workspace
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[0.76rem] font-semibold tracking-[0.2em] uppercase transition-colors ${
                  active ? "text-areia font-bold" : "text-light-cream/75 hover:text-areia"
                }`}
              >
                {l.label}
                {active && (
                  <span
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-areia to-terra-light rounded-full shadow-[0_0_8px_rgba(216,199,165,0.7)]"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-light-cream md:hidden"
        >
          <span className="relative block h-3 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-full bg-light-cream transition-all duration-300 ${
                open ? "top-1/2 -translate-y-1/2 rotate-45 !bg-tuscan-gold" : ""
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-full bg-light-cream transition-all duration-300 ${
                open ? "bottom-1/2 translate-y-1/2 -rotate-45 !bg-tuscan-gold" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-gradient-to-b from-deep-green-dark via-deep-green to-deep-green-dark px-8 md:hidden backdrop-blur-2xl"
          >
            <nav aria-label="Mobile">
              <ul className="space-y-3">
                {links.map((l, i) => {
                  const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
                  return (
                    <motion.li
                      key={l.href}
                      initial={reduced ? false : { opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={l.href}
                        className={`font-serif text-5xl font-medium transition-colors ${
                          active ? "text-tuscan-gold" : "text-light-cream hover:text-tuscan-gold"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-14 space-y-1 text-sm text-laurel-green"
            >
              <p>+91 96651 60160</p>
              <p>phosworkspace@gmail.com</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
