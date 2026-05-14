"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  eyebrow: string;
  headline: React.ReactNode;
  sub: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  imageSrc: string;
  imageAlt: string;
  divisionLabel: string;
};

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
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: Slide[] = useMemo(
    () => [
      {
        id: "education",
        eyebrow: "Navigating Knowledge",
        headline: (
          <>
            Endow <span className="text-accent">Education</span>
            <br />
            <span className="text-background/70">for outcomes that last</span>
          </>
        ),
        sub: "Programs built for measurable progress—so learners, partners, and teams move forward with confidence.",
        primaryCta: { href: "/education", label: "Explore Education" },
        secondaryCta: { href: "/contact", label: "Talk to Endow" },
        imageSrc: "/window.svg",
        imageAlt: "Education window illustration",
        divisionLabel: "Endow Global Education",
      },
      {
        id: "tech",
        eyebrow: "Building Systems",
        headline: (
          <>
            Endow <span className="text-accent">Tech</span>
            <br />
            <span className="text-background/70">for dependable delivery</span>
          </>
        ),
        sub: "Technology that ships clean—Next.js, TypeScript, and product-minded systems for teams that want fewer surprises.",
        primaryCta: { href: "/tech", label: "See Tech" },
        secondaryCta: { href: "/contact", label: "Start a project" },
        imageSrc: "/next.svg",
        imageAlt: "Tech next illustration",
        divisionLabel: "Endow Tech",
      },
      {
        id: "travel",
        eyebrow: "Embracing Adventure",
        headline: (
          <>
            Endow <span className="text-accent">Travel</span>
            <br />
            <span className="text-background/70">for smooth journeys</span>
          </>
        ),
        sub: "Plans, logistics, and guidance that keep travel simple—clear steps from inquiry to arrival.",
        primaryCta: { href: "/travel", label: "Plan Travel" },
        secondaryCta: { href: "/about", label: "About Endow" },
        imageSrc: "/globe.svg",
        imageAlt: "Travel globe illustration",
        divisionLabel: "Endow Travel",
      },
    ],
    []
  );

  useEffect(() => {
    if (reducedMotion) return;
    const t = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, 6800);

    return () => window.clearInterval(t);
  }, [reducedMotion, slides.length]);

  const active = slides[activeIndex];

  const goPrev = () =>
    setActiveIndex((i) => (i - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % slides.length);

  return (
    <main className="w-full px-0 py-0">
      <section
        className="relative overflow-hidden"
        style={{
          backgroundColor: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        {/* grid + orbs */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            mixBlendMode: "screen",
            opacity: 0.5,
          }}
        />
        <div
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 520,
            height: 520,
            top: -130,
            right: -70,
            filter: "blur(90px)",
            background: "radial-gradient(circle, rgba(255,59,59,0.22), transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 400,
            height: 400,
            bottom: 40,
            left: -90,
            filter: "blur(90px)",
            background: "radial-gradient(circle, rgba(255,255,255,0.10), transparent 70%)",
            opacity: 0.9,
          }}
        />

        {/* hero content */}
        <div className="relative px-6 sm:px-10 pt-10 sm:pt-14 pb-8 min-h-[560px] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="brut-button px-3 py-2 inline-flex items-center justify-center text-[11px] sm:text-xs font-black">
                Endow Corporation
              </span>
              <span className="text-xs sm:text-sm font-black text-background/70">
                Parent company • {active.eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[70px] font-black leading-[1.02]">
              {active.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg font-bold text-background/70 leading-relaxed max-w-[54ch]">
              {active.sub}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={active.primaryCta.href}
                className="brut-button px-5 py-3 font-black bg-accent text-foreground border-border transition-transform hover:-translate-y-0.5"
              >
                {active.primaryCta.label}
              </Link>
              <Link
                href={active.secondaryCta.href}
                className="brut-button px-5 py-3 font-black bg-background text-background border-border transition-transform hover:-translate-y-0.5"
              >
                {active.secondaryCta.label}
              </Link>
            </div>

            <div className="mt-8 border-t-2 border-border pt-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-black text-background/70">
                  What’s driving right now:
                </span>
                <span className="text-xs font-black text-accent">
                  {active.divisionLabel}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {slides.map((s, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className="group border-2 border-border bg-foreground px-2 py-2 text-left"
                      aria-label={`Select ${s.id}`}
                      style={{
                        transform: isActive ? "translateY(-1px)" : undefined,
                        backgroundColor: isActive
                          ? "rgba(255,59,59,0.15)"
                          : undefined,
                      }}
                    >
                      <div className="text-[11px] font-black text-background/70 group-hover:text-background">
                        {idx + 1}. <span className="text-accent">{s.id}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative h-[320px] sm:h-[360px] md:h-[420px] border-2 border-border bg-background">
              {slides.map((s, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div
                    key={s.id}
                    className={isActive ? "block" : "hidden"}
                    aria-hidden={!isActive}
                  >
                    <div className="absolute left-0 top-0 p-4">
                      <span className="brut-button px-3 py-2 inline-flex items-center justify-center text-xs font-black">
                        {s.eyebrow}
                      </span>
                    </div>

                    <div className="absolute inset-0 p-8 flex items-center justify-center">
                      <Image
                        src={s.imageSrc}
                        alt={s.imageAlt}
                        width={360}
                        height={360}
                        className="object-contain"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="brut-button px-4 py-2 font-black"
                  aria-label="Previous slide"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="brut-button px-4 py-2 font-black"
                  aria-label="Next slide"
                >
                  Next →
                </button>
              </div>

              <div className="flex items-center gap-2">
                {slides.map((s, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className="h-3 w-3 border-2 border-border bg-background"
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        backgroundColor: isActive ? "var(--accent)" : undefined,
                        boxShadow: isActive
                          ? "0 0 0 2px var(--accent)"
                          : undefined,
                        transform: isActive ? "scale(1.05)" : undefined,
                        transition: reducedMotion
                          ? "none"
                          : "transform 120ms linear, background-color 120ms linear",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="mt-4 text-xs font-bold text-background/70">
              Carousel: {reducedMotion ? "autoplay paused" : "autoplay enabled"}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
