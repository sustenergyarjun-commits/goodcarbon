import type { ReactNode } from "react";
import { Container } from "./ui-kit";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-deep py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,#B9B9C3_1px,transparent_1px),linear-gradient(to_bottom,#B9B9C3_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <Container className="relative">
        <p className="eyebrow text-silver">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <span className="rule-line mt-7" aria-hidden="true" />
        {intro ? <p className="mt-6 max-w-2xl text-base text-silver sm:text-lg">{intro}</p> : null}
      </Container>
    </section>
  );
}
