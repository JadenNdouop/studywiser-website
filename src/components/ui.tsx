import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "mint" | "white" | "outline";

const buttonVariants: Record<Variant, string> = {
  primary:
    "bg-sw-primary text-sw-on-primary sw-shadow-primary hover:bg-sw-primary-container",
  mint: "bg-sw-mint text-sw-on-mint sw-shadow-mint hover:brightness-95",
  white: "bg-sw-card text-sw-primary sw-shadow-card hover:bg-sw-surface-low",
  outline:
    "bg-transparent text-sw-primary border-1.5 border-sw-primary hover:bg-sw-primary-soft",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sw-full px-8 py-4 font-bold text-base transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${buttonVariants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export function Card({
  children,
  className = "",
  tint = "card",
}: {
  children: ReactNode;
  className?: string;
  tint?: "card" | "mint" | "coral" | "lavender";
}) {
  const shadow =
    tint === "mint"
      ? "sw-shadow-mint"
      : tint === "coral"
        ? "sw-shadow-coral"
        : tint === "lavender"
          ? "sw-shadow-lavender"
          : "sw-shadow-card";
  return (
    <div className={`rounded-sw-lg bg-sw-card p-7 ${shadow} ${className}`}>
      {children}
    </div>
  );
}

export function Chip({
  label,
  bg,
  fg,
}: {
  label: string;
  bg: string;
  fg: string;
}) {
  return (
    <span
      className="inline-flex items-center rounded-sw-full px-4 py-2 text-sm font-bold"
      style={{ backgroundColor: bg, color: fg }}
    >
      {label}
    </span>
  );
}

export function SectionEyebrow({
  children,
  tone = "mint",
}: {
  children: ReactNode;
  tone?: "mint" | "onDark";
}) {
  const cls =
    tone === "onDark"
      ? "bg-white/15 text-white"
      : "bg-sw-mint-soft text-sw-on-mint";
  return (
    <span className={`inline-block rounded-sw-full px-4 py-2 text-sm font-bold uppercase tracking-wide ${cls}`}>
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "md",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
}) {
  return (
    <div className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "items-start"}`}>
      {eyebrow ? <SectionEyebrow>{eyebrow}</SectionEyebrow> : null}
      <h2
        className={`font-bold leading-[1.1] text-sw-on-surface ${
          size === "lg" ? "text-4xl sm:text-6xl" : "text-4xl sm:text-5xl"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-xl text-sw-on-surface-variant leading-relaxed">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

/** Full-bleed colored section wrapper — the site's signature "band" motif. */
export function Band({
  children,
  tone = "primary",
  className = "",
}: {
  children: ReactNode;
  tone?: "primary" | "surface" | "card";
  className?: string;
}) {
  const bg =
    tone === "primary" ? "bg-sw-primary" : tone === "card" ? "bg-sw-card" : "bg-sw-surface";
  return <section className={`${bg} ${className}`}>{children}</section>;
}

export function StatTile({
  value,
  label,
  variant,
  size = "md",
}: {
  value: string;
  label: string;
  variant: "mint" | "coral" | "lavender";
  size?: "md" | "lg";
}) {
  const styles = {
    mint: { bg: "bg-sw-mint", fg: "text-sw-on-mint", shadow: "sw-shadow-mint" },
    coral: { bg: "bg-sw-coral", fg: "text-sw-on-coral", shadow: "sw-shadow-coral" },
    lavender: {
      bg: "bg-sw-lavender",
      fg: "text-sw-primary",
      shadow: "sw-shadow-lavender",
    },
  }[variant];
  return (
    <div
      className={`flex flex-1 flex-col items-center gap-1.5 rounded-sw-lg ${styles.bg} ${styles.shadow} px-6 ${size === "lg" ? "py-8" : "py-6"} text-center`}
    >
      <span className={`font-bold ${styles.fg} ${size === "lg" ? "text-5xl" : "text-3xl"}`}>
        {value}
      </span>
      <span className={`font-bold ${styles.fg} ${size === "lg" ? "text-sm" : "text-xs"}`}>
        {label}
      </span>
    </div>
  );
}

export function QuoteCard({
  quote,
  author,
  size = "md",
}: {
  quote: string;
  author: string;
  size?: "md" | "lg";
}) {
  return (
    <Card tint="lavender" className="bg-sw-lavender-soft">
      <p
        className={`leading-relaxed text-sw-on-surface ${size === "lg" ? "text-2xl sm:text-3xl" : "text-xl"}`}
      >
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-5 text-sm font-bold uppercase tracking-wide text-sw-primary">
        — {author}
      </p>
    </Card>
  );
}
