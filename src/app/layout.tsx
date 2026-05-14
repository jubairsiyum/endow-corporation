import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Endow Corporation",
    template: "%s | Endow Corporation",
  },
  description:
    "Endow Corporation — parent company of Endow Global Education, Endow Tech, and Endow Travel.",
  robots: { index: true, follow: true },
};

function Header() {
  return (
    <header className="border-b-2 border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="font-black leading-none text-xl">
          Endow <span className="text-accent">Corporation</span>
        </a>

        <nav aria-label="Primary" className="flex flex-wrap items-center gap-3">
          <a className="brut-link font-bold" href="/education">
            Education
          </a>
          <a className="brut-link font-bold" href="/tech">
            Tech
          </a>
          <a className="brut-link font-bold" href="/travel">
            Travel
          </a>
          <a className="brut-link font-bold" href="/about">
            About
          </a>
          <a className="brut-link font-bold" href="/contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm font-bold text-muted">
          © {new Date().getFullYear()} Endow Corporation
        </div>
        <div className="text-sm font-bold text-muted">
          Mother company of Endow Global Education, Endow Tech & Endow Travel
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex flex-1 flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
