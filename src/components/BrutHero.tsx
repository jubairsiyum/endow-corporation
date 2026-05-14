"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type BrandLink = { href: string; label: string; blurb: string };

const BRAND_LINKS: BrandLink[] = [
  {
    href: "/education",
    label: "Endow Global Education",
    blurb: "Learning programs and training experiences built for outcomes.",
  },
  {
    href: "/tech",
    label: "Endow Tech",
    blurb: "Technology solutions that turn ideas into dependable systems.",
  },
  {
    href: "/travel",
    label: "Endow Travel",
    blurb: "Planning and logistics that help journeys stay smooth.",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(Boolean(mq.matches));
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

export default function BrutHero() {
  const reducedMotion = usePrefersReducedMotion();

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, s: 1 });

  const glanceStats = useMemo(
    () => [
      { value: "03", label: "Subsidiaries" },
      { value: "1", label: "Shared Endow standard" },
      { value: "∞", label: "Support mindset" },
      { value: "A→Z", label: "End-to-end delivery" },
    ],
    []
  );

  useEffect(() => {
    if (reducedMotion) return;

    const el = cardRef.current;
    if (!el) return;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height; // 0..1

      const ry = (px - 0.5) * 12; // rotateY
      const rx = -(py - 0.5) * 10; // rotateX
      const s = 1.01;

      setTilt({ rx, ry, s });
    };

    const onLeave = () => {
      setTilt({ rx: 0, ry: 0, s: 1 });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [reducedMotion]);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="brut-card p-6 sm:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="brut-button px-3 py-2 inline-flex items-center justify-center text-xs sm:text-sm">
                Parent company
              </span>
              <span className="text-xs font-black text-muted">
                Endow Education • Tech • Travel
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-black leading-[1.02] sm:text-5xl">
              Endow <span className="text-accent">Corporation</span>
            </h1>

            <p className="mt-4 text-lg font-bold text-muted">
              A mother company building three focused brands—education, technology,
              and travel—under one consistent Endow standard.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="brut-button px-5 py-3 font-black transition-transform hover:-translate-y-0.5"
              >
                Contact us
              </Link>
              <Link
                href="/education"
                className="brut-button px-5 py-3 font-black transition-transform hover:-translate-y-0.5"
              >
                Explore brands
              </Link>
            </div>

            {/* Quick “scan line” */}
            <div className="mt-6 rounded-none border-2 border-border bg-background p-4">
              <h2 className="text-lg font-black">Three missions. One standard.</h2>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-2">
                <span className="inline-flex items-center justify-center border-2 border-border bg-background px-3 py-2 text-xs font-black">
                  Outcomes
                </span>
                <span className="inline-flex items-center justify-center border-2 border-border bg-background px-3 py-2 text-xs font-black">
                  Consistency
                </span>
                <span className="inline-flex items-center justify-center border-2 border-border bg-background px-3 py-2 text-xs font-black">
                  Support
                </span>
                <span className="inline-flex items-center justify-center border-2 border-border bg-background px-3 py-2 text-xs font-black">
                  Delivery
                </span>
              </div>
            </div>
          </div>

          <div
            ref={cardRef}
            className="rounded-none border-2 border-border bg-background p-5"
            style={
              reducedMotion
                ? undefined
                : {
                    transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.s})`,
                    transition: "transform 120ms linear",
                    transformOrigin: "center",
                  }
            }
          >
            <h2 className="text-xl font-black">At a glance</h2>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {glanceStats.map((s) => (
                <div key={s.label} className="brut-card p-4">
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl font-black leading-none">{s.value}</div>
                    <div className="hidden text-xs font-black text-muted sm:block">
                      •
                    </div>
                  </div>
                  <div className="mt-1 text-sm font-bold text-muted">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm font-bold text-muted">
              Clear, scannable information for teams and partners looking for
              reliable outcomes.
            </p>

            {/* Micro “interactive” hint */}
            <div className="mt-4 border-t-2 border-border pt-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-black">Hover me</span>
                <span className="text-xs font-bold text-muted">
                  {reducedMotion ? "Motion reduced" : "Mouse tilt enabled"}
                </span>
              </div>
              <div className="mt-3 flex gap-2">
                <span className="inline-flex flex-1 items-center justify-center border-2 border-border bg-background px-2 py-2 text-xs font-black">
                  Plan
                </span>
                <span className="inline-flex flex-1 items-center justify-center border-2 border-border bg-background px-2 py-2 text-xs font-black">
                  Build
                </span>
                <span className="inline-flex flex-1 items-center justify-center border-2 border-border bg-background px-2 py-2 text-xs font-black">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries (scannable, not “too many” sections) */}
      <section className="mt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-black">Our subsidiaries</h2>
          <p className="text-sm font-bold text-muted">
            Each brand does its core work—Endow Corporation keeps quality
            aligned.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {BRAND_LINKS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="brut-card p-5 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <h3 className="text-xl font-black">{b.label}</h3>
              <p className="mt-2 text-sm font-bold text-muted">{b.blurb}</p>
              <div className="mt-4 text-xs font-black text-muted">→ Open</div>
            </Link>
          ))}
        </div>
      </section>

      {/* What Endow Corporation does */}
      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="brut-card p-6 sm:p-7">
          <h2 className="text-2xl font-black">How we work</h2>
          <div className="mt-4 space-y-3">
            <div className="brut-card p-4">
              <h3 className="text-lg font-black">Plan</h3>
              <p className="mt-1 text-sm font-bold text-muted">
                Define goals, map delivery, and agree on measurable outcomes.
              </p>
            </div>
            <div className="brut-card p-4">
              <h3 className="text-lg font-black">Build</h3>
              <p className="mt-1 text-sm font-bold text-muted">
                Create and support programs, systems, and services that work in
                real life.
              </p>
            </div>
            <div className="brut-card p-4">
              <h3 className="text-lg font-black">Support</h3>
              <p className="mt-1 text-sm font-bold text-muted">
                Improve continuously—after launch too—so teams stay confident.
              </p>
            </div>
          </div>
        </div>

        <div className="brut-card p-6 sm:p-7">
          <h2 className="text-2xl font-black">What you get</h2>
          <ul className="mt-4 space-y-2 text-sm font-bold text-muted">
            <li>• Outcome-focused delivery across every brand</li>
            <li>• Cross-brand consistency (same Endow standard)</li>
            <li>• Practical solutions (no fluff—just delivery)</li>
            <li>• Ongoing support mindset</li>
          </ul>

          <div className="mt-5 rounded-none border-2 border-border bg-background p-4">
            <h3 className="text-lg font-black">Next step</h3>
            <p className="mt-1 text-sm font-bold text-muted">
              Explore a subsidiary—or message us to collaborate across sectors.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="brut-button px-4 py-3 font-black">
                Reach out
              </Link>
              <Link href="/about" className="brut-button px-4 py-3 font-black">
                About Endow
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightweight CTA */}
      <section className="mt-6 brut-card p-6 sm:p-8">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-black">Want to build together?</h2>
            <p className="mt-2 text-lg font-bold text-muted">
              Tell us what you’re working on and we’ll connect you to the right
              team.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <Link
              href="/contact"
              className="brut-button w-full px-5 py-3 font-black text-center sm:w-auto"
            >
              Contact Endow Corporation
            </Link>
            <div className="text-xs font-bold text-muted">
              This is a starter homepage—content can be expanded page-by-page.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
