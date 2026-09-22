"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const solid = scrolled || open;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[var(--z-header)] transition-all duration-500",
        solid
          ? "bg-white/80 shadow-sm backdrop-blur-lg py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div
        className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 transition-all duration-500"
      >
        <Link
          href="/"
          className="flex items-center group"
          onClick={() => setOpen(false)}
        >
          <div className="relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Aeromiles Logo"
              width={200}
              height={60}
              className={[
                "h-12 w-auto object-contain transition-all duration-300",
                solid ? "" : "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]",
              ].join(" ")}
              priority
            />
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "relative inline-flex h-10 items-center rounded-full px-5 text-sm font-bold transition-all duration-300",
                solid
                  ? isActive(item.href)
                    ? "text-navy bg-navy/10"
                    : "text-slate hover:text-navy hover:bg-navy/5"
                  : isActive(item.href)
                    ? "text-white bg-white/20 backdrop-blur-sm"
                    : "text-white/90 hover:text-white hover:bg-white/10",
              ].join(" ")}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
              {isActive(item.href) && (
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full transition-all ${solid ? "bg-blue" : "bg-white"}`} aria-hidden />
              )}
            </Link>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className={[
            "-mr-2.5 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden",
            solid ? "bg-navy/5 text-navy" : "bg-white/10 text-white",
          ].join(" ")}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden
          >
            {open ? (
              <path
                d="M6 6l14 14M20 6L6 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 8h18M4 13h18M4 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Primary (mobile)"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-line bg-white px-6 pb-8 pt-4 shadow-2xl lg:hidden transition-all duration-300"
      >
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href}>
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                className={[
                  "flex min-h-12 items-center rounded-xl px-4 text-base font-semibold transition-colors",
                  isActive(item.href) ? "text-navy bg-navy/10" : "text-slate hover:bg-slate/10",
                ].join(" ")}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            <Link
              href="/contact"
              className="flex min-h-12 items-center justify-center rounded-xl bg-navy px-4 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
