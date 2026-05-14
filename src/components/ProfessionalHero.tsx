"use client";

import Link from "next/link";
import { ChevronRight } from "./icons";

export default function ProfessionalHero() {
  return (
    <main className="w-full">
      <section className="relative bg-background">
        {/* Grid background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
              Endow Corporation
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
              Building Futures,
              <br />
              <span className="text-muted">One Venture at a Time.</span>
            </h1>
            <p className="mt-6 max-w-prose text-lg font-medium text-muted">
              Endow Corporation is the parent company driving innovation and
              excellence across three key sectors: global education, cutting-edge
              technology, and bespoke travel experiences.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-base font-bold text-white shadow-sm transition-transform hover:scale-105"
              >
                Learn More
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-bold text-muted transition-colors hover:text-foreground"
              >
                Contact Us <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="group">
              <Link href="/education">
                <h3 className="text-xl font-bold text-foreground">
                  Endow Education
                  <ChevronRight className="ml-2 inline-block h-5 w-5 text-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-muted">
                  Navigating knowledge for outcomes that last. We build programs for measurable progress.
                </p>
              </Link>
            </div>
            <div className="group">
              <Link href="/tech">
                <h3 className="text-xl font-bold text-foreground">
                  Endow Tech
                  <ChevronRight className="ml-2 inline-block h-5 w-5 text-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-muted">
                  Building systems for dependable delivery. Clean code and product-minded systems.
                </p>
              </Link>
            </div>
            <div className="group">
              <Link href="/travel">
                <h3 className="text-xl font-bold text-foreground">
                  Endow Travel
                  <ChevronRight className="ml-2 inline-block h-5 w-5 text-accent opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                </h3>
                <p className="mt-2 text-muted">
                  Embracing adventure with smooth journeys. We handle the logistics so you can explore.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
