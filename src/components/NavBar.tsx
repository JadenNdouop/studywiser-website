"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/find-a-tutor", label: "Find a Tutor" },
  { href: "/become-a-tutor", label: "Become a Tutor" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-sw-surface/90 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_4px_24px_-8px_rgba(25,28,30,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sw-lavender">
            <span className="text-sm font-bold text-sw-primary">SW</span>
          </span>
          <span className="text-xl font-bold text-sw-primary">StudyWiser</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-semibold transition-colors hover:text-sw-primary ${
                pathname === link.href ? "text-sw-primary" : "text-sw-on-surface-variant"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/find-a-tutor" variant="primary" className="px-6 py-3 text-sm">
            Get Started
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-sw-full bg-sw-surface-low lg:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-0.5 w-5 rounded-full bg-sw-on-surface" />
            <span className="h-0.5 w-5 rounded-full bg-sw-on-surface" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-sw-outline/30 bg-sw-card px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-sw-md px-3 py-3 text-[15px] font-semibold ${
                  pathname === link.href
                    ? "bg-sw-primary-soft text-sw-primary"
                    : "text-sw-on-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button
            href="/find-a-tutor"
            variant="primary"
            className="mt-3 w-full"
          >
            Get Started
          </Button>
        </div>
      ) : null}
    </header>
  );
}
