"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "bg-navy/80 shadow-[0_4px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl border-b border-line"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        {/* Brand */}
        <Link
          href="/"
          className={cn(
            "flex items-center gap-3 rounded-lg py-1 font-display font-bold tracking-tight transition-all",
            solid ? "text-ink" : "text-white focus-ring-light"
          )}
          onClick={() => setOpen(false)}
        >
          <div className="relative group">
            <Image
              src="/emblem.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 transition-transform duration-300 group-hover:rotate-12"
              priority
            />
          </div>
          <span className={cn(
            "text-xl transition-colors font-display uppercase tracking-widest",
            solid ? "text-ink" : "text-white"
          )}>
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative inline-flex h-10 items-center rounded-full px-4 text-xs font-bold uppercase tracking-widest transition-all duration-300",
                solid
                  ? "text-slate hover:text-ink hover:bg-white/5"
                  : "text-white/80 hover:text-white hover:bg-white/10 focus-ring-light"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className={cn(
            "-mr-2.5 inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden transition-colors",
            solid ? "text-ink" : "text-white focus-ring-light"
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        aria-label="Primary (mobile)"
        hidden={!open}
        className="border-t border-line bg-navy px-6 pb-6 pt-2 lg:hidden animate-in slide-in-from-top duration-300"
      >
        <ul className="flex flex-col gap-2">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href}>
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                className="flex h-12 items-center px-4 rounded-xl text-base font-bold text-ink hover:bg-white/5 transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
