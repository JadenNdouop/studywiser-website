export function HeroBlobs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sw-mint opacity-40 blur-3xl" />
      <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-sw-lavender opacity-40 blur-3xl" />
      <div className="absolute left-1/3 top-[26rem] h-64 w-64 rounded-full bg-sw-coral opacity-30 blur-3xl" />
    </div>
  );
}

export function SectionBlob({
  variant = "mint",
  className = "",
}: {
  variant?: "mint" | "coral" | "lavender" | "yellow";
  className?: string;
}) {
  const bg = {
    mint: "bg-sw-mint",
    coral: "bg-sw-coral",
    lavender: "bg-sw-lavender",
    yellow: "bg-sw-yellow",
  }[variant];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 rounded-full opacity-30 blur-3xl ${bg} ${className}`}
    />
  );
}
