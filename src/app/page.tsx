import { Faq } from "@/components/Faq";
import { HeroBlobs, SectionBlob } from "@/components/Blobs";
import {
  IconBook,
  IconCalendar,
  IconChat,
  IconFlask,
  IconGlobe,
  IconLaptop,
  IconMapPin,
  IconShield,
  IconSparkle,
  IconStar,
  IconTarget,
  IconUsers,
} from "@/components/icons";
import { Band, Button, Card, QuoteCard, SectionHeader } from "@/components/ui";

const SUBJECTS = [
  "Math",
  "Science",
  "English & Writing",
  "Social Studies",
  "SAT / ACT Prep",
  "World Languages",
  "Computer Science",
  "and more",
];

const FEATURES = [
  {
    icon: IconUsers,
    title: "Every subject, one tutor away",
    description:
      "Math, science, English, social studies, test prep, and more — StudyWiser matches your student with a tutor for whatever they're working through, not just one subject.",
    tint: "mint" as const,
    big: true,
  },
  {
    icon: IconShield,
    title: "Vetted, expert tutors",
    description: "Screened for subject mastery and teaching ability, not just grades.",
    tint: "lavender" as const,
  },
  {
    icon: IconGlobe,
    title: "Nationwide, in-person or virtual",
    description: "In your community, or live online from anywhere in the U.S.",
    tint: "coral" as const,
  },
  {
    icon: IconCalendar,
    title: "Flexible scheduling",
    description: "Weekly, bi-weekly, or as-needed — no long-term contracts.",
    tint: "mint" as const,
  },
  {
    icon: IconSparkle,
    title: "Rates that make sense",
    description: "Starting at $35/hour. Pay for the support you actually use.",
    tint: "lavender" as const,
  },
];

const STEPS = [
  {
    number: "01",
    title: "Tell us about your student",
    description: "Grade level, subject, goals, and schedule — a 5-minute form.",
  },
  {
    number: "02",
    title: "We match you with a tutor",
    description: "Paired by subject, availability, and learning style.",
  },
  {
    number: "03",
    title: "Start learning together",
    description: "In person or virtual — book your first session and go.",
  },
];

const PRICING = [
  {
    icon: IconBook,
    title: "Elementary & Middle School",
    description: "All subjects — foundational skills, homework support, and building confidence early.",
    price: "$35",
    tint: "mint" as const,
  },
  {
    icon: IconFlask,
    title: "High School & College",
    description: "All subjects, including advanced coursework — from Algebra 2 to AP Chemistry to college writing.",
    price: "$40",
    tint: "lavender" as const,
  },
  {
    icon: IconTarget,
    title: "Test Prep",
    description: "SAT and ACT strategy, timed practice, and score tracking across every test section.",
    price: "$45",
    tint: "coral" as const,
  },
  {
    icon: IconUsers,
    title: "Group Sessions",
    description: "Collaborative sessions for students at similar levels — great for review and peer learning.",
    price: "Contact us",
    tint: "mint" as const,
  },
];

const FAQS = [
  {
    q: "What subjects does StudyWiser cover?",
    a: "All of them. Math, science, English and writing, social studies, world languages, computer science, and dedicated SAT/ACT prep — if your student needs help, we can match a tutor for it.",
  },
  {
    q: "Where do you offer tutoring?",
    a: "Anywhere in the U.S. Virtual sessions are available nationwide, and we place in-person tutors in local communities across the country.",
  },
  {
    q: "How much does tutoring cost?",
    a: "Rates start at $35/hour and scale with grade level and subject — up to $45/hour for test prep. In-person and virtual sessions are priced the same, and there are no long-term contracts.",
  },
  {
    q: "Is virtual tutoring as effective as in-person?",
    a: "Yes. Our virtual sessions use live video and a shared whiteboard so tutors can work through problems in real time, just like sitting side-by-side.",
  },
  {
    q: "How do I get matched with a tutor?",
    a: "Fill out the Find a Tutor form with your student's grade level, subject, and availability, and our team will reach out with a match within 1–2 business days.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBlobs />
        <div className="relative mx-auto grid max-w-6xl gap-16 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-start gap-7 text-left">
            <span className="inline-block rounded-sw-full bg-sw-lavender-soft px-4 py-2 text-sm font-bold uppercase tracking-wide text-sw-primary">
              Nationwide &middot; In-person &amp; virtual
            </span>
            <h1 className="text-5xl font-bold leading-[1.05] text-sw-on-surface sm:text-6xl lg:text-7xl">
              Tutoring for every subject, wherever your student is.
            </h1>
            <p className="max-w-lg text-xl leading-relaxed text-sw-on-surface-variant">
              StudyWiser matches your student with a vetted tutor — in person
              in your community, or live online from anywhere in the U.S.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/find-a-tutor" variant="primary">
                Find a Tutor
              </Button>
              <Button href="/become-a-tutor" variant="white">
                Become a Tutor
              </Button>
            </div>
          </div>

          <div className="relative mx-auto hidden h-[420px] w-full max-w-md lg:block">
            <Card
              tint="mint"
              className="absolute left-0 top-0 w-64 -rotate-3 bg-sw-mint-soft"
            >
              <div className="flex flex-wrap gap-2">
                <span className="rounded-sw-full bg-sw-card px-3 py-1.5 text-sm font-bold text-sw-on-mint">Math</span>
                <span className="rounded-sw-full bg-sw-card px-3 py-1.5 text-sm font-bold text-sw-on-mint">Science</span>
                <span className="rounded-sw-full bg-sw-card px-3 py-1.5 text-sm font-bold text-sw-on-mint">Writing</span>
              </div>
              <p className="mt-3 text-sm font-bold text-sw-on-surface">Every subject, matched fast.</p>
            </Card>

            <Card className="absolute right-0 top-40 w-56 rotate-2">
              <div className="flex items-center gap-1 text-sw-yellow">
                <IconStar size={18} className="text-[#e8b400]" />
                <IconStar size={18} className="text-[#e8b400]" />
                <IconStar size={18} className="text-[#e8b400]" />
                <IconStar size={18} className="text-[#e8b400]" />
                <IconStar size={18} className="text-[#e8b400]" />
              </div>
              <p className="mt-2 text-sm font-bold text-sw-on-surface">
                &ldquo;Made all the difference.&rdquo;
              </p>
              <p className="mt-1 text-xs font-semibold text-sw-muted">Eliana T., StudyWiser Client</p>
            </Card>

            <Card tint="lavender" className="absolute bottom-0 left-8 w-60 -rotate-1 bg-sw-lavender-soft">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sw-lavender text-sw-primary">
                <IconGlobe size={18} />
              </span>
              <p className="mt-3 text-sm font-bold text-sw-on-surface">
                In-person locally, virtual nationwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <Band tone="primary" className="sw-shadow-primary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-14 text-center sm:px-8 lg:grid-cols-4">
          {[
            { value: "K–College", label: "Every grade level" },
            { value: "All subjects", label: "Not just math" },
            { value: "50 states", label: "Virtual coverage" },
            { value: "$35+", label: "Per hour" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-white sm:text-4xl">{s.value}</span>
              <span className="text-sm font-bold text-white/80">{s.label}</span>
            </div>
          ))}
        </div>
      </Band>

      {/* Subjects */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <SectionHeader
            eyebrow="What we cover"
            title="Every subject, one place to start."
            align="center"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {SUBJECTS.map((s, i) => {
              const tones = [
                "bg-sw-mint-soft text-sw-on-mint",
                "bg-sw-coral-soft text-sw-on-coral",
                "bg-sw-lavender-soft text-sw-primary",
              ];
              return (
                <span
                  key={s}
                  className={`rounded-sw-full px-6 py-3 text-lg font-bold ${tones[i % tones.length]}`}
                >
                  {s}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two ways to learn */}
      <Band tone="card" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="How you learn" title="Two ways to work with a tutor." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card tint="mint" className="bg-sw-mint-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-sw-md bg-sw-mint text-sw-on-mint">
                <IconMapPin size={24} />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-sw-on-surface">In-person, near you</h3>
              <p className="mt-3 text-lg leading-relaxed text-sw-on-surface-variant">
                We place tutors in comfortable, convenient community spots —
                libraries, coffee shops, or your home — matched to families
                across the country.
              </p>
            </Card>
            <Card tint="lavender" className="bg-sw-lavender-soft">
              <span className="flex h-14 w-14 items-center justify-center rounded-sw-md bg-sw-lavender text-sw-primary">
                <IconLaptop size={24} />
              </span>
              <h3 className="mt-5 text-2xl font-bold text-sw-on-surface">Virtual, from anywhere</h3>
              <p className="mt-3 text-lg leading-relaxed text-sw-on-surface-variant">
                Live video sessions with a shared whiteboard make virtual
                tutoring just as hands-on as sitting side-by-side — available
                nationwide.
              </p>
            </Card>
          </div>
        </div>
      </Band>

      {/* Why StudyWiser — bento */}
      <section className="relative py-20">
        <SectionBlob variant="mint" className="right-0 top-0 h-96 w-96" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Why StudyWiser" title="Everything a family needs." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              const tintBg =
                f.tint === "mint" ? "bg-sw-mint" : f.tint === "coral" ? "bg-sw-coral" : "bg-sw-lavender";
              const tintFg =
                f.tint === "mint"
                  ? "text-sw-on-mint"
                  : f.tint === "coral"
                    ? "text-sw-on-coral"
                    : "text-sw-primary";
              return (
                <Card
                  key={f.title}
                  className={`flex flex-col gap-4 ${f.big ? "md:col-span-2 md:flex-row md:items-center md:gap-8" : ""}`}
                >
                  <span
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-sw-md ${tintBg} ${tintFg}`}
                  >
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3 className={`font-bold text-sw-on-surface ${f.big ? "text-2xl" : "text-xl"}`}>
                      {f.title}
                    </h3>
                    <p className="mt-2 text-lg leading-relaxed text-sw-on-surface-variant">
                      {f.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <Band tone="card" className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="How it works" title="Three steps to your first session." />
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex flex-col gap-3">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sw-primary-soft text-2xl font-bold text-sw-primary">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-sw-on-surface">{step.title}</h3>
                <p className="text-lg leading-relaxed text-sw-on-surface-variant">
                  {step.description}
                </p>
                {i < STEPS.length - 1 ? (
                  <span className="absolute right-[-1.75rem] top-8 hidden text-sw-outline sm:block" aria-hidden>
                    <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                      <path d="M0 6h28M22 1l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-14">
            <Button href="/find-a-tutor" variant="primary">
              Find a Tutor
            </Button>
          </div>
        </div>
      </Band>

      {/* Pricing */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader eyebrow="Simple pricing" title="One rate, every subject." />
          <div className="mt-12 flex flex-col gap-4">
            {PRICING.map((tier) => {
              const Icon = tier.icon;
              const tintBg =
                tier.tint === "mint" ? "bg-sw-mint-soft" : tier.tint === "coral" ? "bg-sw-coral-soft" : "bg-sw-lavender-soft";
              const tintFg =
                tier.tint === "mint" ? "text-sw-on-mint" : tier.tint === "coral" ? "text-sw-on-coral" : "text-sw-primary";
              return (
                <div
                  key={tier.title}
                  className="flex flex-col gap-5 rounded-sw-lg bg-sw-card p-7 sw-shadow-card sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-5 sm:items-center">
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-sw-md ${tintBg} ${tintFg}`}>
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
            <Button href="/services" variant="outline">
              See full service details
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Band tone="card" className="py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <SectionHeader eyebrow="What families say" title="Real results, from real students." align="center" />
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2">
            <QuoteCard
              size="lg"
              quote="StudyWiser helped me find a tutor who really understood my struggles and made math feel manageable. The personalized support and flexible scheduling made all the difference."
              author="Eliana T., StudyWiser Client"
            />
            <QuoteCard
              size="lg"
              quote="I underestimated how tough this year would get, but with my tutor's help, I gained confidence and started seeing real progress."
              author="Shruti P., StudyWiser Client"
            />
          </div>
        </div>
      </Band>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <SectionHeader eyebrow="FAQ" title="Questions families ask us." align="center" />
          <div className="mt-10">
            <Faq items={FAQS} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <Band tone="primary" className="relative overflow-hidden sw-shadow-primary">
        <SectionBlob variant="mint" className="left-1/4 top-0 h-80 w-80 opacity-10" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-7 px-5 py-20 text-center sm:px-8">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 text-white">
            <IconChat size={26} />
          </span>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Get started with StudyWiser, today.
          </h2>
          <p className="max-w-lg text-xl text-white/85">
            Tell us about your student and we&apos;ll match you with a tutor
            for any subject, anywhere in the U.S.
          </p>
          <Button href="/find-a-tutor" variant="mint">
            Find a Tutor
          </Button>
        </div>
      </Band>
    </div>
  );
}
