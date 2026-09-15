import { SectionBlob } from "@/components/Blobs";
import { IconChat, IconGlobe, IconLaptop, IconMapPin, IconShield, IconUsers } from "@/components/icons";
import { Band, Button, Card, SectionHeader } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — StudyWiser",
  description:
    "StudyWiser matches students with vetted tutors in every subject — in-person in your community, or live virtual sessions anywhere in the U.S.",
};

const VALUES = [
  {
    icon: IconUsers,
    title: "Patient, personalized teaching",
    description: "No rushing, no one-size-fits-all lessons — every tutor adapts to how your student learns best.",
  },
  {
    icon: IconGlobe,
    title: "Reach across the country",
    description: "Virtual sessions nationwide, with in-person tutors placed in communities across the U.S.",
  },
  {
    icon: IconShield,
    title: "Trusted, vetted tutors",
    description: "Every tutor is screened for subject mastery and a genuine ability to connect with students.",
  },
];

const EXPECT = [
  {
    title: "A quick intro call",
    description: "We learn about your student's goals, current level, and what's been tricky so far.",
  },
  {
    title: "A tutor match within days",
    description: "We pair your student with a tutor suited to their subject, personality, and schedule.",
  },
  {
    title: "A first session that sets the pace",
    description: "Your tutor assesses where your student is and builds a plan for the sessions ahead.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden">
        <SectionBlob variant="lavender" className="left-1/2 top-0 h-72 w-72 -translate-x-1/2" />
        <div className="relative mx-auto max-w-3xl px-5 pb-12 pt-16 text-center sm:px-8">
          <span className="inline-block rounded-sw-full bg-sw-mint-soft px-4 py-2 text-sm font-bold uppercase tracking-wide text-sw-on-mint">
            Our story
          </span>
          <h1 className="mt-5 text-5xl font-bold leading-[1.05] text-sw-on-surface sm:text-6xl">
            We want you to get the education you deserve.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-xl leading-relaxed text-sw-on-surface-variant">
            StudyWiser started with a simple idea: every student learns
            differently, and tutoring should meet them exactly where they are —
            in any subject, wherever they live.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-3 sm:px-8">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <Card key={v.title} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sw-primary-soft text-sw-primary">
                  <Icon size={24} />
                </span>
                <h3 className="text-xl font-bold text-sw-on-surface">{v.title}</h3>
                <p className="text-base leading-relaxed text-sw-on-surface-variant">
                  {v.description}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
          <Card tint="mint" className="bg-sw-mint-soft">
            <span className="flex h-14 w-14 items-center justify-center rounded-sw-md bg-sw-mint text-sw-on-mint">
              <IconMapPin size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-sw-on-surface">
              Support That Meets You Where You Are
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-sw-on-surface-variant">
              From libraries to coffee shops to your own kitchen table,
              StudyWiser places in-person tutors in communities across the
              country. Whether it&apos;s one-on-one help after school or
              weekly sessions to stay ahead, our tutors meet you somewhere
              comfortable and convenient.
            </p>
          </Card>
          <Card tint="lavender" className="bg-sw-lavender-soft">
            <span className="flex h-14 w-14 items-center justify-center rounded-sw-md bg-sw-lavender text-sw-primary">
              <IconLaptop size={24} />
            </span>
            <h2 className="mt-5 text-2xl font-bold text-sw-on-surface">
              Learn Anywhere, Anytime
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-sw-on-surface-variant">
              With StudyWiser&apos;s virtual tutoring, you can access an
              expert tutor from the comfort of your own home, wherever you
              are in the U.S. Our live, online sessions use interactive
              tools like shared whiteboards to make learning engaging and
              effective.
            </p>
          </Card>
        </div>
      </section>

      {/* What to expect */}
      <Band tone="card" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Getting started" title="What to expect when you sign up." align="center" />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {EXPECT.map((e, i) => (
              <div key={e.title} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sw-coral-soft text-2xl font-bold text-sw-on-coral">
                  {i + 1}
                </span>
                <h3 className="text-xl font-bold text-sw-on-surface">{e.title}</h3>
                <p className="max-w-xs text-lg leading-relaxed text-sw-on-surface-variant">
                  {e.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Our rates" title="Simple, hourly pricing." align="center" />

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
            <Card className="flex flex-col gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-sw-md bg-sw-mint-soft text-sw-on-mint">
                <IconMapPin size={24} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-sw-on-surface">
                  In-Person Sessions
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-sw-on-surface-variant">
                  Book an in-person session for personalized, one-on-one
                  support in a comfortable local setting. Weekly or
                  bi-weekly meetings help build confidence over time.
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-sw-primary">$35</span>
                <span className="text-sm font-semibold text-sw-muted">
                  / 60 min hour
                </span>
              </div>
              <Button href="/find-a-tutor" variant="outline">
                Get started
              </Button>
            </Card>

            <Card className="flex flex-col gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-sw-md bg-sw-lavender-soft text-sw-primary">
                <IconLaptop size={24} />
              </span>
              <div>
                <h3 className="text-2xl font-bold text-sw-on-surface">
                  Virtual Sessions
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-sw-on-surface-variant">
                  Ready to learn from home? Book a virtual session for
                  personalized, one-on-one support at your own pace —
                  available nationwide.
                </p>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-sw-primary">$35</span>
                <span className="text-sm font-semibold text-sw-muted">
                  / 60 min hour
                </span>
              </div>
              <Button href="/find-a-tutor" variant="outline">
                Get started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <Band tone="primary" className="relative overflow-hidden sw-shadow-primary">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-5 py-20 text-center sm:px-8">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white">
            <IconChat size={26} />
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Get started with StudyWiser, today.
          </h2>
          <Button href="/find-a-tutor" variant="mint">
            Join Now
          </Button>
        </div>
      </Band>
    </div>
  );
}
