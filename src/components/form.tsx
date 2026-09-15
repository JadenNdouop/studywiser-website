import { ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Field({
  label,
  required,
  children,
  hint,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold text-sw-on-surface">
        {label}
        {required ? <span className="text-sw-error"> *</span> : null}
      </span>
      {children}
      {hint ? <span className="text-xs text-sw-muted">{hint}</span> : null}
    </label>
  );
}

const inputClasses =
  "w-full rounded-sw-md border border-sw-outline/40 bg-sw-input-bg px-4 py-3 text-[15px] text-sw-on-surface placeholder:text-sw-muted outline-none focus:border-sw-primary focus:ring-2 focus:ring-sw-primary-soft transition-colors";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${inputClasses} ${props.className ?? ""}`} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      rows={props.rows ?? 4}
      className={`${inputClasses} resize-none ${props.className ?? ""}`}
    />
  );
}

export function Select({
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${inputClasses} ${props.className ?? ""}`}>
      {children}
    </select>
  );
}

export function CheckboxGroup({
  name,
  options,
  columns = 2,
}: {
  name: string;
  options: string[];
  columns?: 2 | 3;
}) {
  return (
    <div
      className={`grid gap-2.5 ${columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}
    >
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 rounded-sw-md bg-sw-input-bg px-3 py-2.5 text-sm font-semibold text-sw-on-surface-variant has-checked:bg-sw-primary-soft has-checked:text-sw-primary"
        >
          <input
            type="checkbox"
            name={name}
            value={opt}
            className="h-4 w-4 accent-sw-primary"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

export function RadioGroup({
  name,
  options,
}: {
  name: string;
  options: string[];
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {options.map((opt) => (
        <label
          key={opt}
          className="flex items-center gap-2 rounded-sw-full bg-sw-input-bg px-4 py-2.5 text-sm font-semibold text-sw-on-surface-variant has-checked:bg-sw-primary-soft has-checked:text-sw-primary"
        >
          <input
            type="radio"
            name={name}
            value={opt}
            required
            className="h-4 w-4 accent-sw-primary"
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
