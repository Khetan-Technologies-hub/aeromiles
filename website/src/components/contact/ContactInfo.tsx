"use client";

import { Reveal } from "@/components/reveal";
import { CONTACT } from "@/lib/site";
import { Card } from "@/components/Card";

export function ContactInfo() {
  const infoItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: "Email",
      content: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Location",
      content: CONTACT.location,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Response time",
      content: "Within 24 hours",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "NDA ready",
      content: "Confidential discussions welcome",
    },
  ];

  return (
    <div className="space-y-6">
      <Reveal>
        <h3 className="text-2xl font-bold text-navy mb-6">Other ways to reach us</h3>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="space-y-4" role="list">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-line bg-bg-white hover:shadow-md transition-shadow" role="listitem">
              <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-blue/10 text-blue">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-navy">{item.title}</p>
                {item.href ? (
                  <a href={item.href} className="text-slate hover:text-navy transition-colors break-all">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-slate">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <Card padding="lg" className="border-blue/30 bg-blue/5">
          <h4 className="font-bold text-navy mb-3">Prefer a direct conversation?</h4>
          <p className="text-slate mb-4">
            Schedule a 15-minute discovery call with our team. We&apos;ll discuss your requirements and outline next steps.
          </p>
          <a
            href={CONTACT.inquiryHref}
            className="inline-flex min-h-11 items-center rounded-full bg-blue px-6 py-2 font-bold text-white transition-colors hover:bg-blue-600 active:scale-95"
          >
            Book a call
          </a>
        </Card>
      </Reveal>
    </div>
  );
}