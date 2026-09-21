import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</Tag>;
}

export function Section({
  children,
  className = "",
  id,
  tone = "cream",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "cream" | "white" | "navy" | "sand";
}) {
  const tones = {
    cream: "bg-cream",
    white: "bg-white",
    navy: "bg-navy text-white",
    sand: "bg-sand",
  } as const;
  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-orange">
      {children}
    </p>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="bg-navy text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/85 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Container>
    </header>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-blue-soft/50 bg-sand px-4 py-3 text-sm text-muted">
      <span className="font-semibold text-navy">Needs confirmation: </span>
      {children}
    </p>
  );
}
