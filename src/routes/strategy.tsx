import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  StrategySection,
  MethodologySection,
  DeliverablesSection,
  FinalCtaSection,
} from "@/components/sections";

const title = "The Good Carbon Strategy | Six-Stage EBITDA Growth Methodology";
const description =
  "A structured approach integrating energy efficiency, decarbonisation, operational excellence and profitability enhancement, delivered through a six-stage EBITDA growth methodology.";

export const Route = createFileRoute("/strategy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/strategy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/strategy" }],
  }),
  component: StrategyPage,
});

function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Unique Advantage"
        title="The Good Carbon Strategy"
        intro="A structured approach that integrates energy efficiency, decarbonisation, operational excellence and profitability enhancement."
      />
      <StrategySection />
      <MethodologySection />
      <DeliverablesSection />
      <FinalCtaSection />
    </>
  );
}
