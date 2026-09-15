"use client";

import { createContext, FormEvent, ReactNode, useContext, useState } from "react";
import { Button, Card } from "./ui";

type Status = "idle" | "loading" | "success" | "error";

const StatusContext = createContext<Status>("idle");

const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function SubmittableForm({
  children,
  subject,
  successTitle,
  successSubtitle,
}: {
  children: ReactNode;
  /** Distinguishes this form's emails in your inbox, e.g. "New Find a Tutor lead". */
  subject: string;
  successTitle: string;
  successSubtitle: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  if (status === "success") {
    return (
      <Card tint="mint" className="bg-sw-mint-soft text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sw-mint">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-sw-on-mint"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-sw-on-surface">{successTitle}</h3>
        <p className="mt-2 text-sw-on-surface-variant">{successSubtitle}</p>
      </Card>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      console.error(
        "NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is not set — form submissions won't send. See .env.local.example.",
      );
      setStatus("error");
      return;
    }

    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", subject);
    formData.append("from_name", "StudyWiser Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <StatusContext.Provider value={status}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <fieldset disabled={status === "loading"} className="m-0 min-w-0 border-0 p-0 flex flex-col gap-6">
          {children}
        </fieldset>
        {status === "error" ? (
          <p className="text-sm font-semibold text-sw-error">
            Something went wrong sending that — please try again, or email us
            directly at info@studywiser.org.
          </p>
        ) : null}
      </form>
    </StatusContext.Provider>
  );
}

/** Drop-in replacement for the plain submit Button — shows a loading state automatically. */
export function SubmitButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const status = useContext(StatusContext);
  return (
    <Button type="submit" variant="primary" disabled={status === "loading"} className={className}>
      {status === "loading" ? "Sending…" : children}
    </Button>
  );
}
