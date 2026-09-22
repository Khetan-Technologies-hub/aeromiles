import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Sora, Exo, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aeromiles — RC Planes, Drones & Aeromodelling Labs",
    template: "%s · Aeromiles",
  },
  description:
    "Aeromiles designs RC planes and drones, builds K–12 & college aeromodelling labs, and delivers drone capability for defence and government.",
  openGraph: {
    title: "Aeromiles — RC Planes, Drones & Aeromodelling Labs",
    description:
      "RC planes, drones and aeromodelling labs — engineered in India for classrooms, hobbyists and defence.",
    siteName: "Aeromiles",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${exo.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
