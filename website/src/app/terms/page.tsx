import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Aeromiles",
  description:
    "Terms of Service for use of the Aeromiles website. Final terms are pending approval.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-24 sm:py-28">
      <div className="container px-6">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-6 max-w-[65ch] text-base leading-7 text-ink">
            This page is a placeholder. Final Terms of Service content is
            pending approval and will be published here once finalized.
          </p>
        </article>
      </div>
    </main>
  );
}
