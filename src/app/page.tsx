import type { Metadata } from "next";
import ProfessionalHero from "../components/ProfessionalHero";

export const metadata: Metadata = {
  title: "Endow Corporation | Building Futures",
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
  return <ProfessionalHero />;
}
