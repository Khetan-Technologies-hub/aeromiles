import type { Metadata } from "next";
import { getTeamMembers } from "@/lib/team";
import { getMilestones } from "@/lib/milestones";
import AboutClient from "@/components/about/AboutClient";

export const metadata: Metadata = {
  title: "About Aeromiles | Team, Mission & Milestones",
  description:
    "Meet the team behind Aeromiles and explore our journey building RC aircraft, drone capability, and STEM lab ecosystems in India.",
  openGraph: {
    title: "About Aeromiles | Team, Mission & Milestones",
    description:
      "Meet the team behind Aeromiles and explore our journey building RC aircraft, drone capability, and STEM lab ecosystems in India.",
    images: [{ url: "/logo.png" }],
  },
};

export default async function AboutPage() {
  const team = await getTeamMembers();
  const milestones = (await getMilestones()).map(m => m.metadata);

  return (
    <main className="min-h-screen bg-white">
      <AboutClient team={team} milestones={milestones} />
    </main>
  );
}
