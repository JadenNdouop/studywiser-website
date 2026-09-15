import { SectionBlob } from "@/components/Blobs";
import { IconChat, IconClock, IconGlobe } from "@/components/icons";
import { SubmitButton, SubmittableForm } from "@/components/SubmittableForm";
import { Field, TextArea, TextInput } from "@/components/form";
import { Card } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — StudyWiser",
  description: "Get in touch with StudyWiser — questions, scheduling, or anything else.",
};

const QUICK_FACTS = [
  { icon: IconClock, label: "We reply within 1–2 business days" },
  { icon: IconGlobe, label: "Serving families nationwide, in-person & virtual" },
  { icon: IconChat, label: "Prefer a form? Try Find a Tutor or Become a Tutor" },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <SectionBlob variant="mint" className="right-0 top-0 h-64 w-64" />
      <div className="relative mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold leading-[1.05] text-sw-on-surface sm:text-6xl">
            Contact us.
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-sw-on-surface-variant">
            Questions about tutoring, pricing, or scheduling? We&apos;re happy to help.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="mailto:info@studywiser.org"
            className="flex items-center justify-center gap-2 rounded-sw-full bg-sw-lavender-soft px-6 py-3.5 text-base font-bold text-sw-primary"
          >
            info@studywiser.org
          </a>
          <a
            href="tel:+14434207899"
            className="flex items-center justify-center gap-2 rounded-sw-full bg-sw-mint-soft px-6 py-3.5 text-base font-bold text-sw-on-mint"
          >
            (443) 420-7899
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {QUICK_FACTS.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.label} className="flex flex-col items-center gap-3 rounded-sw-lg bg-sw-card p-5 text-center sw-shadow-card">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sw-surface-low text-sw-primary">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold text-sw-on-surface-variant">{f.label}</span>
              </div>
            );
          })}
        </div>

        <Card className="mt-12">
          <SubmittableForm
            subject="New contact message — StudyWiser"
            successTitle="Message sent!"
            successSubtitle="Thanks for reaching out — we'll get back to you within 1–2 business days."
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First Name" required>
                <TextInput name="firstName" required placeholder="First name" />
              </Field>
              <Field label="Last Name" required>
                <TextInput name="lastName" required placeholder="Last name" />
              </Field>
            </div>
            <Field label="Email" required>
              <TextInput name="email" type="email" required placeholder="you@email.com" />
            </Field>
            <Field label="Message" required>
              <TextArea name="message" required rows={6} placeholder="How can we help?" />
            </Field>
            <SubmitButton className="mt-2">Send</SubmitButton>
          </SubmittableForm>
        </Card>
      </div>
    </div>
  );
}
