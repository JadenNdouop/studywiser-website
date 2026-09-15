"use client";

import { useState } from "react";
import { IconChevronDown } from "./icons";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-sw-lg bg-sw-card sw-shadow-card"
          >
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-bold text-sw-on-surface">{item.q}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sw-surface-low text-sw-primary transition-transform ${open ? "rotate-180" : ""}`}
              >
                <IconChevronDown size={16} />
              </span>
            </button>
            {open ? (
              <p className="px-6 pb-5 leading-relaxed text-sw-on-surface-variant">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
