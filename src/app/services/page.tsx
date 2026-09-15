import { SectionBlob } from "@/components/Blobs";
import { IconBook, IconCheck, IconFlask, IconTarget, IconUsers } from "@/components/icons";
import { Band, Button, QuoteCard, SectionHeader } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — StudyWiser",
  description:
    "Tutoring for every subject and grade level, in-person or virtual — plus dedicated SAT/ACT prep and group sessions.",
};

const SUBJECTS = ["Math", "Science", "English & Writing", "Social Studies", "World Languages", "Computer Science"];

const TIERS = [
  {
    icon: IconBook,
    title: "Elementary & Middle School",
    description:
      "All subjects — foundational skills, homework support, and building confidence early. Great for students who need a steady, patient hand.",
    price: "$35",
    tint: "mint" as const,
  },
  {
    icon: IconFlask,
    title: "High School & College",
    description:
      "All subjects, including advanced coursework — from Algebra 2 to AP Chemistry to college-level writing and beyond.",
    price: "$40",
    tint: "lavender" as const,
  },
  {
    icon: IconTarget,
    title: "Test Prep",
    description:
      "SAT and ACT prep across every section — strategy, timed practice, and score tracking to help students hit their goals.",
    price: "$45",
    tint: "coral" as const,
  },
  {
    icon: IconUsers,
    title: "Group Sessions",
    description:
      "Collaborative learning for students at similar levels — ideal for review, problem-solving, and building confidence together.",
    price: "Contact for pricing",
    tint: "mint" as const,
  },
];

const tintClasses = {
  mint: { bg: "bg-sw-mint-soft", icon: "bg-sw-mint text-sw-on-mint" },
  coral: { bg: "bg-sw-coral-soft", icon: "bg-sw-coral text-sw-on-coral" },
  lavender: { bg: "bg-sw-lavender-soft", icon: "bg-sw-lavender text-sw-primary" },
};

const INCLUDED = [
  "A tutor matched to your student's subject and level",
  "Session notes after every meeting",
  "Flexible rescheduling with no long-term contract",
  "In-person or virtual — your choice, every time",
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <SectionBlob variant="coral" className="right-0 top-0 h-72 w-72" />
        <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-16 text-center sm:px-8">
          <h1 className="text-5xl font-bold leading-[1.05] text-sw-on-surface sm:text-6xl">
            Support for every subject, every grade.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-sw-on-surface-variant">
            One rate structure, priced by grade level — not by subject. Pick
            what your student needs and we&apos;ll match a tutor for it.
          </p>
        </div>
      </section>

      {/* Subjects covered */}
      <section className="pb-10">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {SUBJECTS.map((s, i) => {
              const tones = [
                "bg-sw-mint-soft text-sw-on-mint",
                "bg-sw-coral-soft text-sw-on-coral",
                "bg-sw-lavender-soft text-sw-primary",
              ];
              return (
                <span key={s} className={`rounded-sw-full px-5 py-2.5 text-base font-bold ${tones[i % tones.length]}`}>
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Pricing" title="Pick the right fit for your student." />

          <div className="mt-12 flex flex-col gap-4">
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              const t = tintClasses[tier.tint];
              return (
                <div
                  key={tier.title}
                  className="flex flex-col gap-5 rounded-sw-lg bg-sw-card p-7 sw-shadow-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-5 sm:items-center">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-sw-md ${t.icon}`}>
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-sw-on-surface">{tier.title}</h3>
                      <p className="mt-1 max-w-xl text-base leading-relaxed text-sw-on-surface-variant">
                        {tier.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-baseline gap-2">
                    <span className="text-2xl font-bold text-sw-primary">{tier.price}</span>
                    {tier.price.startsWith("$") ? (
                      <span className="text-sm font-semibold text-sw-muted">/ 60 min</span>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="primary">
              Book a consultation
            </Button>
          </div>
        </div>
      </section>

      {/* What's included */}
      <Band tone="card" className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionHeader eyebrow="Every session includes" title="What you get with every booking." align="center" />
          <div className="mx-auto mt-12 grid max-w-2xl gap-4 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-sw-lg bg-sw-surface-low p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sw-mint text-sw-on-mint">
                  <IconCheck size={16} />
                </span>
                <span className="text-base font-semibold text-sw-on-surface-variant">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <QuoteCard
            size="lg"
            quote="I underestimated how tough this year would get, but with my tutor's help, I gained confidence and started seeing real progress."
            author="Shruti P., StudyWiser Client"
          />
        </div>
      </section>

      <Band tone="card" className="py-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold text-sw-on-surface">
            Questions before getting started?
          </h2>
          <Button href="/contact" variant="outline">
            Get in touch
          </Button>
        </div>
      </Band>
    </div>
  );
}
