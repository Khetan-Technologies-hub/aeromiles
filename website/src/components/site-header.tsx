"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, PRIMARY_CTA, SITE } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Transparent over the hero, solid once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When the mobile drawer is open: lock body scroll, close on Esc,
  // and move focus into the drawer.
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

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-bg/90 shadow-[0_6px_24px_-18px_rgba(14,42,77,0.6)] backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-5",
        ].join(" ")}
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-extrabold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/emblem.png"
            alt=""
            width={38}
            height={38}
            className="h-9 w-9"
            priority
          />
          <span
            className={[
              "text-lg transition-colors",
              solid ? "text-navy" : "text-white",
            ].join(" ")}
          >
            {SITE.name.toUpperCase()}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "text-sm font-semibold transition-colors",
                solid
                  ? "text-slate hover:text-navy"
                  : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={PRIMARY_CTA.href}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_30px_-12px_rgba(27,142,230,0.8)] transition-transform hover:-translate-y-0.5"
          >
            {PRIMARY_CTA.label}
            <span aria-hidden>↗</span>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            aria-hidden
            className={solid ? "text-navy" : "text-white"}
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

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        aria-label="Primary"
        hidden={!open}
        className="border-t border-line bg-bg px-6 pb-6 pt-2 lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href}>
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                className="block border-b border-line py-3 text-base font-semibold text-navy"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={PRIMARY_CTA.href}
          className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-blue px-5 py-3 text-base font-bold text-white"
          onClick={() => setOpen(false)}
        >
          {PRIMARY_CTA.label}
          <span aria-hidden>↗</span>
        </Link>
      </nav>
    </header>
  );
}
