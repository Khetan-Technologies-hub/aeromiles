import { Metadata } from "next";
import { getPageContent } from "@/lib/content";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | Aeromiles",
  description: "Read the Aeromiles privacy policy regarding data collection and usage.",
};

export default async function PrivacyPage() {
  const content = await getPageContent("privacy");

  if (!content) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate">Privacy policy not found.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Section variant="default" padding="2xl" reveal>
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-display font-bold text-navy mb-8">
            {(content as any).title || "Privacy Policy"}
          </h1>
          <div className="prose prose-slate max-w-none">
            <div className="text-slate leading-relaxed whitespace-pre-wrap">
              {content.body}
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
