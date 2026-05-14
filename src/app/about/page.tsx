import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Endow Corporation",
  description:
    "About Endow Corporation — mother company of Endow Global Education, Endow Tech, and Endow Travel.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Endow Corporation",
    description:
      "About Endow Corporation — mother company of Endow Global Education, Endow Tech, and Endow Travel.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="brut-card p-6 sm:p-8">
        <h1 className="text-4xl font-black leading-[1.05]">
          About <span className="text-accent">Endow Corporation</span>
        </h1>
        <p className="mt-4 text-lg font-bold text-muted">
          We’re a mother company building three focused brands: education,
          technology, and travel.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Education</h2>
            <p className="mt-2 font-bold text-muted">
              Learning solutions and programs guided by outcomes.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Tech</h2>
            <p className="mt-2 font-bold text-muted">
              Reliable systems and digital experiences for real teams.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Travel</h2>
            <p className="mt-2 font-bold text-muted">
              Organized planning and logistics that make journeys smoother.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Our standard</h2>
            <p className="mt-2 font-bold text-muted">
              Consistency, clarity, and support across every brand.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
