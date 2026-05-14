import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endow Tech",
  description:
    "Endow Tech — technology solutions and digital experiences under Endow Corporation.",
  alternates: { canonical: "/tech" },
  openGraph: {
    title: "Endow Tech",
    description:
      "Technology solutions and digital experiences under Endow Corporation.",
    type: "website",
  },
};

export default function TechPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="brut-card p-6 sm:p-8">
        <h1 className="text-4xl font-black leading-[1.05]">
          Endow <span className="text-accent">Tech</span>
        </h1>
        <p className="mt-4 text-lg font-bold text-muted">
          Practical technology that turns ideas into dependable systems.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Product Build</h2>
            <p className="mt-2 font-bold text-muted">
              Web and software solutions designed for real-world scale.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Automation</h2>
            <p className="mt-2 font-bold text-muted">
              Streamlined workflows that save time and reduce errors.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Integration</h2>
            <p className="mt-2 font-bold text-muted">
              Connect services so teams can move faster together.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
