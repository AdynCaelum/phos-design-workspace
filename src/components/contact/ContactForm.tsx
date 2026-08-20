"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error" | "fallback";

const PROJECT_TYPES = ["Residential", "Commercial", "Banking", "Healthcare", "Institutional", "Hospitality", "Other"];

const inputClass =
  "w-full rounded-xl border border-laurel-green/25 bg-deep-green-dark/70 px-4 py-3.5 text-sm text-light-cream placeholder:text-laurel-green/40 outline-none transition-all duration-300 focus:border-tuscan-gold focus:ring-2 focus:ring-tuscan-gold/20 focus:bg-deep-green-dark";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else if (json.fallback) {
        setStatus("fallback");
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again, or reach us directly by phone or email.");
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-card rounded-2xl p-10 text-center border border-tuscan-gold/40 shadow-glow-gold">
        <p className="font-serif text-3xl font-medium text-tuscan-gold">Thank you.</p>
        <p className="mt-3 text-sm leading-relaxed text-light-cream/90">
          Your enquiry has been sent. We&apos;ll get back to you within a working day.
        </p>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8 md:p-10 border border-laurel-green/20 shadow-dramatic">
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="eyebrow mb-2 block !text-tuscan-gold">Name *</label>
            <input id="name" name="name" required placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="phone" className="eyebrow mb-2 block !text-tuscan-gold">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="+91 …" className={inputClass} />
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className="eyebrow mb-2 block !text-tuscan-gold">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
          </div>
          <div>
            <label htmlFor="projectType" className="eyebrow mb-2 block !text-tuscan-gold">Project Type</label>
            <select id="projectType" name="projectType" defaultValue="" className={inputClass}>
              <option value="" disabled className="bg-deep-green-dark text-light-cream">
                Select…
              </option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} className="bg-deep-green-dark text-light-cream">
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="eyebrow mb-2 block !text-tuscan-gold">Message *</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us about your site, brief and timeline…"
            className={inputClass}
          />
        </div>

        {status === "error" && <p className="text-sm text-red-400">{error}</p>}
        {status === "fallback" && (
          <p className="text-sm text-light-cream/90">
            The form isn&apos;t connected yet — please email us directly at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-tuscan-gold underline">
              {site.email}
            </a>{" "}
            or call {site.phones[0]}.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto rounded-full bg-gradient-to-r from-tuscan-gold to-tuscan-gold-light px-9 py-4 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-deep-green-dark shadow-glow-gold transition-all duration-300 hover:scale-105 hover:bg-light-cream disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
      </form>
    </div>
  );
}
