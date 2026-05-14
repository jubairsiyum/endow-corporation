import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-bold text-xl flex items-center gap-2">
          <span className="inline-block rounded-md bg-accent p-2 text-white">
            E
          </span>
          <span>
            Endow <span className="text-muted">Corporation</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          <Link className="font-semibold text-muted hover:text-foreground transition-colors" href="/education">
            Education
          </Link>
          <Link className="font-semibold text-muted hover:text-foreground transition-colors" href="/tech">
            Tech
          </Link>
          <Link className="font-semibold text-muted hover:text-foreground transition-colors" href="/travel">
            Travel
          </Link>
          <Link className="font-semibold text-muted hover:text-foreground transition-colors" href="/about">
            About
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link href="/" className="font-bold text-lg">
            Endow Corporation
          </Link>
          <p className="text-sm text-muted mt-1">
            Mother company of Endow Global Education, Endow Tech & Endow Travel
          </p>
        </div>
        <div className="text-sm font-medium text-muted">
          © {new Date().getFullYear()} Endow Corporation. All rights reserved.
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
      <body className="min-h-full flex flex-col bg-background">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
