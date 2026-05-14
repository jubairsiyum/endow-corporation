import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Endow Travel",
  description:
    "Endow Travel — travel services and planning experiences under Endow Corporation.",
  alternates: { canonical: "/travel" },
  openGraph: {
    title: "Endow Travel",
    description:
      "Travel services and planning experiences under Endow Corporation.",
    type: "website",
  },
};

export default function TravelPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="brut-card p-6 sm:p-8">
        <h1 className="text-4xl font-black leading-[1.05]">
          Endow <span className="text-accent">Travel</span>
        </h1>
        <p className="mt-4 text-lg font-bold text-muted">
          Travel planning that stays organized from start to finish.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Planning</h2>
            <p className="mt-2 font-bold text-muted">
              Itineraries designed around time, purpose, and comfort.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Logistics</h2>
            <p className="mt-2 font-bold text-muted">
              Coordinated bookings and details, handled with care.
            </p>
          </div>
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Support</h2>
            <p className="mt-2 font-bold text-muted">
              Assistance when it matters, so travel stays smooth.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
