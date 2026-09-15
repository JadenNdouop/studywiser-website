"use client";

import Link from "next/link";
import { Button } from "./ui";
import { TextInput } from "./form";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/find-a-tutor", label: "Find a Tutor" },
  { href: "/become-a-tutor", label: "Become a Tutor" },
  { href: "/contact", label: "Contact" },
];

const SUBJECTS = ["Math", "Science", "English & Writing", "Social Studies", "SAT / ACT Prep"];

export function Footer() {
  return (
    <footer className="mt-20">
      {/* Newsletter band */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 rounded-sw-xl bg-sw-primary px-6 py-10 text-center sw-shadow-primary sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white">
              Get tutoring tips in your inbox.
            </h3>
            <p className="mt-1 text-sm font-medium text-white/80">
              Occasional study tips and StudyWiser news — no spam.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm flex-col gap-3 sm:flex-row"
          >
            <TextInput
              type="email"
              placeholder="you@email.com"
              required
              aria-label="Email address"
              className="border-transparent bg-white/95 focus:ring-white/40"
            />
            <Button type="submit" variant="mint" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sw-lavender">
                <span className="text-sm font-bold text-sw-primary">SW</span>
              </span>
              <span className="text-xl font-bold text-sw-primary">StudyWiser</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-sw-on-surface-variant">
              Personalized tutoring in every subject — in-person in your
              community, or online from anywhere in the U.S.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:flex sm:gap-16">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-sw-muted">
                Explore
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-semibold text-sw-on-surface-variant hover:text-sw-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-sw-muted">
                Subjects
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {SUBJECTS.map((s) => (
                  <li key={s}>
                    <Link
                      href="/services"
                      className="text-sm font-semibold text-sw-on-surface-variant hover:text-sw-primary"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wide text-sw-muted">
                Contact
              </h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm font-semibold text-sw-on-surface-variant">
                <li>
                  <a href="mailto:info@studywiser.org" className="hover:text-sw-primary">
                    info@studywiser.org
                  </a>
                </li>
                <li>
                  <a href="tel:+14434207899" className="hover:text-sw-primary">
                    (443) 420-7899
                  </a>
                </li>
                <li className="text-sw-muted font-medium">Nationwide, in-person &amp; virtual</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-sw-outline/30 pt-6 text-xs text-sw-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} StudyWiser. All rights reserved.</p>
          <div className="flex gap-2">
            <span className="rounded-sw-full bg-sw-mint-soft px-3 py-1 font-bold text-sw-on-mint">
              All subjects
            </span>
            <span className="rounded-sw-full bg-sw-coral-soft px-3 py-1 font-bold text-sw-on-coral">
              Nationwide
            </span>
            <span className="rounded-sw-full bg-sw-lavender-soft px-3 py-1 font-bold text-sw-primary">
              K–College
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
