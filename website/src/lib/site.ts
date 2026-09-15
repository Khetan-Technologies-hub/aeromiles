/**
 * Single source of truth for site-wide chrome: nav, contact, socials.
 * Header and footer both read from here so they never drift apart.
 */

export type NavItem = { label: string; href: string };

export const NAV_ITEMS: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Education / Labs", href: "/education" },
  { label: "Defence", href: "/defence" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const PRIMARY_CTA: NavItem = {
  label: "Get a Proposal",
  href: "/contact",
};

export const CONTACT = {
  email: "hello@aeromiles.in",
  location: "India",
  inquiryHref: "/contact",
} as const;

/**
 * Social links — hrefs are placeholders until the client provides the real
 * accounts (PRD open item O8). `label` is used for the accessible name.
 */
export type SocialLink = {
  label: string;
  href: string;
  icon: "linkedin" | "youtube" | "instagram";
};

export const SOCIALS: SocialLink[] = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "YouTube", href: "#", icon: "youtube" },
  { label: "Instagram", href: "#", icon: "instagram" },
];

export const SITE = {
  name: "Aeromiles",
  tagline:
    "Building aircraft, learning ecosystems and unmanned capabilities for India's next generation of flight.",
} as const;
