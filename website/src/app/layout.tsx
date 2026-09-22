import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { ToastProvider } from "@/components/Toast";

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

export const metadata: Metadata = {
  title: {
    default: "Aeromiles | Pioneering RC Planes, Drones & STEM Labs",
    template: "%s · Aeromiles",
  },
  description:
    "Pioneering the next generation of aerospace innovation in India. We provide high-performance RC aircraft, modern STEM labs, and advanced UAV capability for defence.",
  openGraph: {
    title: "Aeromiles | Pioneering RC Planes, Drones & STEM Labs",
    description:
      "Pioneering the next generation of aerospace innovation in India. We provide high-performance RC aircraft, modern STEM labs, and advanced UAV capability for defence.",
    siteName: "Aeromiles",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <ToastProvider>
          {children}
        </ToastProvider>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
