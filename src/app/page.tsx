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
    </main>
  );
}
