import { SubmitButton, SubmittableForm } from "@/components/SubmittableForm";
import { CheckboxGroup, Field, RadioGroup, Select, TextArea, TextInput } from "@/components/form";
import { Card } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find a Tutor — StudyWiser",
  description: "Tell us about your student and we'll match you with the right tutor.",
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

const TIME_FRAMES = ["Morning (8am–12pm)", "Afternoon (12pm–4pm)", "Evening (4pm–8pm)"];

export default function FindATutorPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold leading-tight text-sw-on-surface sm:text-5xl">
          Let&apos;s learn together.
        </h1>
        <p className="mt-4 text-lg text-sw-on-surface-variant">
          Tell us a bit about your student and we&apos;ll match you with the
          right tutor.
        </p>
      </div>

      <Card className="mt-12">
        <SubmittableForm
          subject="New Find a Tutor lead — StudyWiser"
          successTitle="Thanks — we've got it!"
          successSubtitle="A member of the StudyWiser team will reach out within 1–2 business days to match your student with a tutor."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Student First Name" required>
              <TextInput name="studentFirstName" required placeholder="First name" />
            </Field>
            <Field label="Student Last Name" required>
              <TextInput name="studentLastName" required placeholder="Last name" />
            </Field>
            <Field label="Student Email">
              <TextInput name="studentEmail" type="email" placeholder="student@email.com" />
            </Field>
            <Field label="Phone">
              <TextInput name="studentPhone" type="tel" placeholder="(555) 555-5555" />
            </Field>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Parent/Guardian First Name" required>
              <TextInput name="parentFirstName" required placeholder="First name" />
            </Field>
            <Field label="Parent/Guardian Last Name" required>
              <TextInput name="parentLastName" required placeholder="Last name" />
            </Field>
            <Field label="Parent/Guardian Email" required>
              <TextInput name="parentEmail" type="email" required placeholder="you@email.com" />
            </Field>
            <Field label="Parent/Guardian Phone" required>
              <TextInput name="parentPhone" type="tel" required placeholder="(555) 555-5555" />
            </Field>
          </div>

          <Field label="Zip Code" required>
            <TextInput name="zip" required inputMode="numeric" placeholder="21044" className="max-w-40" />
          </Field>

          <Field label="What is the student's current grade level?" required>
            <Select name="grade" required defaultValue="">
              <option value="" disabled>
                Select a grade level
              </option>
              {GRADES.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </Select>
          </Field>

          <Field label="What subject does the student need help with?" required>
            <RadioGroup
              name="subject"
              options={["Math", "Science", "English/Writing", "Social Studies", "World Languages", "Computer Science", "SAT/ACT Prep"]}
            />
          </Field>

          <Field label="What is your preferred tutoring format?" required>
            <RadioGroup name="format" options={["In-Person", "Virtual", "Both"]} />
          </Field>

          <Field label="What days do you prefer for tutoring sessions?" required hint="Select all that apply.">
            <CheckboxGroup name="days" options={DAYS} />
          </Field>

          <Field label="What time of day works best?" required hint="Select all that apply.">
            <CheckboxGroup name="timeFrames" options={TIME_FRAMES} columns={3} />
          </Field>

          <Field label="How frequently would you like tutoring sessions?" required>
            <Select name="frequency" required defaultValue="">
              <option value="" disabled>
                Select an option
              </option>
              <option>1x/week</option>
              <option>2x/week</option>
              <option>3x/week</option>
              <option>4x/week</option>
              <option>Flexible</option>
            </Select>
          </Field>

          <Field label="What are your main tutoring goals?" required>
            <TextArea name="goals" required placeholder="e.g. improve test scores, catch up on Algebra 1..." />
          </Field>

          <Field label="Describe any learning challenges or struggles." required>
            <TextArea name="challenges" required />
          </Field>

          <Field label="Any special learning needs or accommodations?">
            <TextArea name="accommodations" rows={3} />
          </Field>

          <SubmitButton className="mt-2">Submit</SubmitButton>
        </SubmittableForm>
      </Card>
    </div>
  );
}
