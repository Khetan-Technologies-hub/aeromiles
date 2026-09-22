import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact Aeromiles | Inquire About STEM Labs & UAV Capability",
  description: "Ready to elevate your institution or organization? Contact Aeromiles for aeromodelling labs, STEM education programs, and professional UAV capability inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />

      <Section variant="default" padding="2xl" reveal revealDelay={0.1}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </Section>
    </main>
  );
}