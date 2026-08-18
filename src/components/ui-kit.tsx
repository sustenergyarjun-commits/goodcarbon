import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: "dark" | "light" }) {
  return (
    <p className={`eyebrow ${tone === "light" ? "text-silver" : "text-muted-foreground"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "dark",
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 text-3xl leading-[1.1] font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      <span
        className={`rule-line mt-6 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden="true"
      />
      {intro ? (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            tone === "light" ? "text-silver" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type CtaProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  hash?: string;
  variant?: "solid" | "outline" | "light";
  className?: string;
  type?: "submit" | "button";
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-bold tracking-wide uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current";

const styles = {
  solid: "bg-primary text-primary-foreground hover:bg-deep hover:-translate-y-0.5",
  outline:
    "border border-slate-brand/30 text-foreground hover:border-slate-brand hover:bg-secondary hover:-translate-y-0.5",
  light: "border border-silver/40 text-white hover:bg-white/10 hover:-translate-y-0.5",
};

export function Cta({ children, to, href, hash, variant = "solid", className = "", type }: CtaProps) {
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} {...(hash ? { hash } : {})} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}

export function Card({
  title,
  children,
  index,
  tone = "dark",
  className = "",
}: {
  title: ReactNode;
  children?: ReactNode;
  index?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={`group h-full rounded-sm border p-6 transition-all duration-300 sm:p-7 ${
        tone === "light"
          ? "border-white/10 bg-white/[0.03] hover:border-silver/40 hover:bg-white/[0.06]"
          : "border-border bg-card hover:border-slate-brand/40 hover:shadow-[0_18px_50px_-30px_rgba(20,35,40,0.7)]"
      } hover:-translate-y-1 ${className}`}
    >
      {index ? (
        <span className={`eyebrow ${tone === "light" ? "text-silver" : "text-muted-foreground"}`}>
          {index}
        </span>
      ) : null}
      <h3
        className={`mt-2 text-lg font-bold tracking-tight ${
          tone === "light" ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h3>
      {children ? (
        <div
          className={`mt-3 text-sm leading-relaxed ${
            tone === "light" ? "text-silver" : "text-muted-foreground"
          }`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}

export function FlowChain({
  steps,
  tone = "dark",
}: {
  steps: string[];
  tone?: "dark" | "light";
}) {
  return (
    <ol className="flex flex-wrap items-stretch gap-3">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center gap-3">
          <span
            className={`rounded-sm border px-4 py-3 text-xs font-bold tracking-wider uppercase ${
              tone === "light"
                ? "border-silver/25 bg-white/[0.04] text-white"
                : "border-border bg-secondary text-foreground"
            }`}
          >
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={tone === "light" ? "text-silver" : "text-muted-foreground"}
            >
              &rarr;
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
