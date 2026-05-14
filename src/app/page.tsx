import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Endow Corporation",
  description:
    "Endow Corporation — parent company of Endow Global Education, Endow Tech, and Endow Travel.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Endow Corporation",
    description:
      "Parent company of Endow Global Education, Endow Tech, and Endow Travel.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      {/* Hero */}
      <section className="brut-card p-6 sm:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl">
              Endow <span className="text-accent">Corporation</span>
            </h1>
            <p className="mt-4 text-lg font-bold text-muted">
              A mother company building three focused brands: education, technology,
              and travel—under one consistent Endow standard.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="brut-button px-5 py-3 font-black">
                Contact us
              </Link>
              <Link
                href="/education"
                className="brut-button px-5 py-3 font-black"
              >
                Explore brands
              </Link>
            </div>
          </div>

          <div className="rounded-none border-2 border-border bg-background p-5">
            <h2 className="text-xl font-black">At a glance</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="brut-card p-4">
                <div className="text-2xl font-black leading-none">03</div>
                <div className="mt-1 text-sm font-bold text-muted">
                  Subsidiaries
                </div>
              </div>
              <div className="brut-card p-4">
                <div className="text-2xl font-black leading-none">1</div>
                <div className="mt-1 text-sm font-bold text-muted">
                  Shared Endow standard
                </div>
              </div>
              <div className="brut-card p-4">
                <div className="text-2xl font-black leading-none">∞</div>
                <div className="mt-1 text-sm font-bold text-muted">
                  Support mindset
                </div>
              </div>
              <div className="brut-card p-4">
                <div className="text-2xl font-black leading-none">A→Z</div>
                <div className="mt-1 text-sm font-bold text-muted">
                  End-to-end delivery
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-muted">
              Clear, scannable information for teams and partners looking for
              reliable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Subsidiaries (scannable, not “too many” sections) */}
      <section className="mt-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-black">Our subsidiaries</h2>
          <p className="text-sm font-bold text-muted">
            Each brand does its core work—Endow Corporation keeps quality aligned.
          </p>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Link
            href="/education"
            className="brut-card p-5 transition-transform hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-black">Endow Global Education</h3>
            <p className="mt-2 text-sm font-bold text-muted">
              Learning programs and training experiences built for outcomes.
            </p>
          </Link>

          <Link
            href="/tech"
            className="brut-card p-5 transition-transform hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-black">Endow Tech</h3>
            <p className="mt-2 text-sm font-bold text-muted">
              Technology solutions that turn ideas into dependable systems.
            </p>
          </Link>

          <Link
            href="/travel"
            className="brut-card p-5 transition-transform hover:-translate-y-0.5"
          >
            <h3 className="text-xl font-black">Endow Travel</h3>
            <p className="mt-2 text-sm font-bold text-muted">
              Planning and logistics that help journeys stay smooth.
            </p>
          </Link>
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
              Tell us what you’re working on and we’ll connect you to the right team.
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
