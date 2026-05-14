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
      <section className="brut-card p-6 sm:p-8">
        <h1 className="text-4xl font-black leading-[1.05]">
          Endow <span className="text-accent">Corporation</span>
        </h1>
        <p className="mt-3 text-lg font-bold text-muted">
          We build learning, technology, and travel experiences—through our
          subsidiaries.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Link
            href="/education"
            className="brut-button inline-flex items-center justify-center px-4 py-4 text-center"
          >
            <span className="font-black">Endow Global Education</span>
          </Link>
          <Link
            href="/tech"
            className="brut-button inline-flex items-center justify-center px-4 py-4 text-center"
          >
            <span className="font-black">Endow Tech</span>
          </Link>
          <Link
            href="/travel"
            className="brut-button inline-flex items-center justify-center px-4 py-4 text-center"
          >
            <span className="font-black">Endow Travel</span>
          </Link>
        </div>
      </section>

      {/* More informative sections */}
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Mission</h2>
          <p className="mt-2 font-bold text-muted">
            Build outcomes that matter—through education, dependable technology,
            and well-organized travel experiences.
          </p>
        </div>
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">What we stand for</h2>
          <p className="mt-2 font-bold text-muted">
            Clarity, consistency, and real support—so every brand stays aligned to
            the same Endow standard.
          </p>
        </div>
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">How we help</h2>
          <p className="mt-2 font-bold text-muted">
            Programs that teach, systems that scale, and planning that reduces
            friction—end to end.
          </p>
        </div>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="brut-card p-5 md:col-span-2">
          <h2 className="text-xl font-black">Our approach</h2>
          <p className="mt-2 font-bold text-muted">
            We connect strategy to delivery. Each subsidiary works on its core,
            while Endow Corporation ensures shared quality and a consistent
            experience.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="brut-card p-4">
              <h3 className="text-lg font-black">Plan</h3>
              <p className="mt-1 text-sm font-bold text-muted">
                Goals → roadmaps → measurable outcomes.
              </p>
            </div>
            <div className="brut-card p-4">
              <h3 className="text-lg font-black">Build</h3>
              <p className="mt-1 text-sm font-bold text-muted">
                Systems, training, and services that work.
              </p>
            </div>
            <div className="brut-card p-4">
              <h3 className="text-lg font-black">Support</h3>
              <p className="mt-1 text-sm font-bold text-muted">
                Guidance and improvement—after launch too.
              </p>
            </div>
          </div>
        </div>

        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Strengths</h2>
          <ul className="mt-3 space-y-2 text-sm font-bold text-muted">
            <li>• Outcome-focused delivery</li>
            <li>• Cross-brand consistency</li>
            <li>• Practical, delivery-first solutions</li>
            <li>• Support that continues</li>
          </ul>
        </div>
      </section>

      {/* Quick subsidiary recap */}
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Education</h2>
          <p className="mt-2 font-bold text-muted">
            Learning programs and training experiences designed for outcomes.
          </p>
          <Link href="/education" className="brut-link mt-3 block font-bold">
            Explore education →
          </Link>
        </div>
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Tech</h2>
          <p className="mt-2 font-bold text-muted">
            Technology solutions that turn ideas into dependable systems.
          </p>
          <Link href="/tech" className="brut-link mt-3 block font-bold">
            Explore tech →
          </Link>
        </div>
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Travel</h2>
          <p className="mt-2 font-bold text-muted">
            Planning and logistics that help journeys stay smooth.
          </p>
          <Link href="/travel" className="brut-link mt-3 block font-bold">
            Explore travel →
          </Link>
        </div>
      </section>

      {/* Existing section you liked */}
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">What we do</h2>
          <p className="mt-2 font-bold text-muted">
            Education, technology solutions, and travel services—under one parent
            brand.
          </p>
        </div>
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Why it matters</h2>
          <p className="mt-2 font-bold text-muted">
            Clear expertise across sectors with a consistent Endow standard.
          </p>
        </div>
        <div className="brut-card p-5">
          <h2 className="text-xl font-black">Next step</h2>
          <p className="mt-2 font-bold text-muted">
            Explore each subsidiary, then contact us for collaboration.
          </p>
        </div>
      </section>

      <section className="mt-6 brut-card p-6 sm:p-8">
        <h2 className="text-2xl font-black">Want to collaborate?</h2>
        <p className="mt-2 text-lg font-bold text-muted">
          Tell us what you’re building and we’ll connect you to the right team.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="brut-button px-5 py-3 font-black text-center">
            Contact Endow Corporation
          </Link>
          <Link href="/about" className="brut-button px-5 py-3 font-black text-center">
            Learn about us
          </Link>
        </div>
      </section>
    </main>
  );
}
