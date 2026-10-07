import type { Metadata } from "next";
import { MarkdownContent } from "@/components/markdown-content";
import { getPageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | Aeromiles",
  description:
    "Read how Aeromiles collects, uses, and protects information submitted through this website.",
};

export default function PrivacyPage() {
  const privacyContent = getPageContent("privacy");

  if (!privacyContent) {
    throw new Error("Required privacy content is missing from website/content/privacy.md.");
  }

  return (
    <main className="min-h-screen bg-white py-24 sm:py-28">
      <div className="container px-6">
        <article className="mx-auto max-w-3xl">
          <MarkdownContent content={privacyContent.body} />
        </article>
      </div>
    </main>
  );
}
