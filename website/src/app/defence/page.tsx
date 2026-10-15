import type { Metadata } from "next";
import { getDefencePageData, getDefenceCapabilities } from "@/lib/defence";
import DefenceClient from "@/components/defence/DefenceClient";

export const metadata: Metadata = {
  title: "Defence & Government UAV Capability | Aeromiles",
  description:
    "Discover Aeromiles defence and government UAV capability focused on indigenous engineering, mission adaptability, and responsible deployment.",
  openGraph: {
    title: "Defence & Government UAV Capability | Aeromiles",
    description:
      "Discover Aeromiles defence and government UAV capability focused on indigenous engineering, mission adaptability, and responsible deployment.",
    images: [{ url: "/images/defence-teaser.webp" }],
  },
};

export default async function DefencePage() {
  const pageData = await getDefencePageData();
  const capabilities = await getDefenceCapabilities();

  return (
    <main className="min-h-screen bg-white">
      <DefenceClient pageData={pageData} capabilities={capabilities} />
    </main>
  );
}
