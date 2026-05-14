import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endow Global Education",
  description:
    "Endow Global Education — learning solutions and educational experiences under Endow Corporation.",
  alternates: { canonical: "/education" },
  openGraph: {
    title: "Endow Global Education",
    description:
      "Learning solutions and educational experiences under Endow Corporation.",
    type: "website",
  },
};

export default function EducationPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="brut-card p-6 sm:p-8">
        <h1 className="text-4xl font-black leading-[1.05]">
          Endow <span className="text-accent">Global Education</span>
        </h1>
        <p className="mt-4 text-lg font-bold text-muted">
          Education built for outcomes — programs, training, and learning
          experiences guided by the Endow standard.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Learning Programs</h2>
            <p className="mt-2 font-bold text-muted">
              Structured pathways for skills, careers, and growth.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Workshops</h2>
            <p className="mt-2 font-bold text-muted">
              Short, high-impact sessions designed for immediate value.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Support</h2>
            <p className="mt-2 font-bold text-muted">
              Curriculum, coaching, and guidance from start to finish.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
