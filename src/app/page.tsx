import type { Metadata } from "next";
import Link from "next/link";
import BrutHero from "../components/BrutHero";

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
  return <BrutHero />;
}
