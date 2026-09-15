import Link from "next/link";
import Image from "next/image";
import { CONTACT, NAV_ITEMS, SITE, SOCIALS, type SocialLink } from "@/lib/site";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
  } as const;
  switch (icon) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-.95 1.82-1.95 3.75-1.95 4 0 4.75 2.5 4.75 5.76V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.75-1.75C19.35 5.1 12 5.1 12 5.1s-7.35 0-8.85.45A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.75 1.75c1.5.45 8.85.45 8.85.45s7.35 0 8.85-.45A2.5 2.5 0 0 0 22.6 16.7C23 15.2 23 12 23 12zM9.75 15.5v-7l6 3.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.17.42.37 1.06.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.17-1.06.37-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.17-.42-.37-1.06-.42-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.17 1.06-.37 2.23-.42C8.42 2.21 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.5.01-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.21 8.5 3.2 8.85 3.2 12s.01 3.5.07 4.74c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4.01 15.15 4 12 4zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28zm5.14-.9a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
        </svg>
      );
  }
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="mx-auto max-w-[1200px] px-6 pb-7 pt-16">
        <div className="grid gap-9 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <Image
                src="/emblem.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-lg font-extrabold tracking-tight text-white">
                {SITE.name.toUpperCase()}
              </span>
            </Link>
            <p className="max-w-xs text-sm">{SITE.tagline}</p>
            <ul className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  >
                    <SocialIcon icon={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-white">
              Quick links
            </h2>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-1.5 text-sm transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-white">
              Contact
            </h2>
            <ul className="text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="block py-1.5 transition-colors hover:text-white"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="py-1.5">{CONTACT.location}</li>
              <li>
                <Link
                  href={CONTACT.inquiryHref}
                  className="mt-1 inline-flex items-center gap-1.5 py-1.5 font-semibold text-blue transition-colors hover:text-white"
                >
                  Start an inquiry <span aria-hidden>→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
          <span>
            © {year} {SITE.name}. All rights reserved.
          </span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
