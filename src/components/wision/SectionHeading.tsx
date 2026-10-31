import type { ReactNode } from "react";

export function SectionHeading({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div data-reveal className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="heading-display mt-3 text-[2.25rem] md:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}

export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-lilac bg-lavender px-2.5 py-1 text-xs font-medium text-primary-soft">
      <span className="size-1.5 rounded-full bg-primary-soft" aria-hidden />
      {children}
    </span>
  );
}
