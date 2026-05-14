import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Endow Corporation",
  description:
    "Contact Endow Corporation — mother company of Endow Global Education, Endow Tech, and Endow Travel.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Endow Corporation",
    description:
      "Contact Endow Corporation — mother company of Endow Global Education, Endow Tech, and Endow Travel.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10">
      <section className="brut-card p-6 sm:p-8">
        <h1 className="text-4xl font-black leading-[1.05]">
          Contact <span className="text-accent">Endow Corporation</span>
        </h1>
        <p className="mt-4 text-lg font-bold text-muted">
          Let’s collaborate across education, technology, and travel.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Email</h2>
            <p className="mt-2 font-bold text-muted">
              hello@endowcorporation.com
            </p>
            <p className="mt-3 text-sm font-bold text-muted">
              Replace with your real contact email.
            </p>
          </div>

          <div className="brut-card p-5">
            <h2 className="text-xl font-black">Message</h2>
            <form className="mt-3 flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-sm font-bold text-muted">
                Name
                <input
                  className="brut-card px-3 py-2 font-bold"
                  type="text"
                  name="name"
                  autoComplete="name"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-bold text-muted">
                Email
                <input
                  className="brut-card px-3 py-2 font-bold"
                  type="email"
                  name="email"
                  autoComplete="email"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-bold text-muted">
                Details
                <textarea
                  className="brut-card px-3 py-2 font-bold min-h-[120px]"
                  name="details"
                />
              </label>

              <button type="submit" className="brut-button px-4 py-3">
                Send message
              </button>

              <p className="text-xs font-bold text-muted">
                Form is static for now. We’ll wire it to an API route next.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
