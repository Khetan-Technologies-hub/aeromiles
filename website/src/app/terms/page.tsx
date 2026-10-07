import type { Metadata } from "next";
import { MarkdownContent } from "@/components/markdown-content";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service | Aeromiles",
  description:
    "Terms of Service for use of the Aeromiles website.",
};

export default function TermsPage() {
  const termsContent = getPageContent("terms");

  if (!termsContent) {
    throw new Error("Required terms content is missing from website/content/terms.md.");
  }

  return (
    <main className="min-h-screen bg-white py-24 sm:py-28">
      <div className="container px-6">
        <article className="mx-auto max-w-3xl">
          <MarkdownContent content={termsContent.body} />
        </article>
      </div>
    </main>
  );
}
