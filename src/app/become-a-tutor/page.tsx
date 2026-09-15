import { SubmitButton, SubmittableForm } from "@/components/SubmittableForm";
import { CheckboxGroup, Field, RadioGroup, Select, TextArea, TextInput } from "@/components/form";
import { Card } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Tutor — StudyWiser",
  description: "Join the StudyWiser tutoring team. Tell us about your experience and availability.",
};

const GRADES = [
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
  "College",
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function BecomeATutorPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight text-sw-on-surface sm:text-5xl">
          Let&apos;s work together.
        </h1>
        <p className="mt-4 text-lg text-sw-on-surface-variant">
          Join the StudyWiser tutoring team — tell us about your background
          and availability.
        </p>
      </div>

      <Card className="mt-12">
        <SubmittableForm
          subject="New Become a Tutor application — StudyWiser"
          successTitle="Application received!"
          successSubtitle="Thanks for applying — our team will review your application and reach out if it's a good fit."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="First Name" required>
              <TextInput name="firstName" required placeholder="First name" />
            </Field>
            <Field label="Last Name" required>
              <TextInput name="lastName" required placeholder="Last name" />
            </Field>
            <Field label="Email" required>
              <TextInput name="email" type="email" required placeholder="you@email.com" />
            </Field>
            <Field label="Phone" required>
              <TextInput name="phone" type="tel" required placeholder="(555) 555-5555" />
            </Field>
          </div>

          <label className="flex items-center gap-2.5 text-sm font-semibold text-sw-on-surface-variant">
            <input type="checkbox" name="newsOptIn" className="h-4 w-4 accent-sw-primary" />
            Sign up for news and updates
          </label>

          <Field label="Zip Code" required>
            <TextInput name="zip" required inputMode="numeric" placeholder="21044" className="max-w-40" />
          </Field>

          <Field label="What is the highest level of education you have completed?" required>
            <Select name="education" required defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option>Some high school, no diploma</option>
              <option>High School Graduate (or equivalent, e.g. GED)</option>
              <option>Some college credit, no degree</option>
              <option>Associate Degree</option>
              <option>Bachelor&apos;s Degree</option>
              <option>Master&apos;s Degree</option>
              <option>Professional Degree</option>
              <option>Doctorate Degree</option>
            </Select>
          </Field>

          <Field label="What grade levels can you tutor?" required hint="Select all that apply.">
            <CheckboxGroup name="grades" options={GRADES} />
          </Field>

          <Field label="What subjects can you tutor?" required hint="Select all that apply.">
            <CheckboxGroup
              name="subjects"
              columns={3}
              options={["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Computer Science", "SAT/ACT Prep"]}
            />
          </Field>

          <Field label="How many years of tutoring/teaching experience do you have?" required>
            <Select name="experience" required defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option>Less than 1</option>
              <option>1 - 2</option>
              <option>2 - 4</option>
              <option>4+</option>
            </Select>
          </Field>

          <Field label="What is your preferred tutoring format?" required>
            <RadioGroup name="format" options={["In-Person", "Virtual", "Both"]} />
          </Field>

          <Field label="What days/times do you prefer for tutoring sessions?" required hint="Select all that apply.">
            <CheckboxGroup name="days" options={DAYS} />
          </Field>

          <Field label="Describe a time you helped a student overcome a learning challenge." required>
            <TextArea name="story" required />
          </Field>

          <Field label="Any additional skills or qualifications that make you a great tutor?" required>
            <TextArea name="qualifications" required />
          </Field>

          <p className="rounded-sw-md bg-sw-surface-low px-4 py-3 text-sm font-semibold text-sw-on-surface-variant">
            Have a résumé or cover letter? Email it to{" "}
            <a href="mailto:info@studywiser.org" className="text-sw-primary underline">
              info@studywiser.org
            </a>{" "}
            after you submit this form.
          </p>

          <SubmitButton className="mt-2">Submit</SubmitButton>
        </SubmittableForm>
      </Card>
    </div>
  );
}
