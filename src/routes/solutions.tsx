import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  FlagshipSection,
  CapabilitiesSection,
  DeliverablesSection,
  EndToEndSection,
  CommercialSection,
  FinalCtaSection,
} from "@/components/sections";

const title = "Energy Optimisation Solutions | Industrial Energy Efficiency Services";
const description =
  "Energy audit, system optimisation, power quality, process re-engineering, renewable integration and CAPEX/OPEX optimisation services that reduce energy cost and improve EBITDA.";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Energy Optimisation & Decarbonisation Services"
        intro="High-impact projects across electrical, thermal and process systems — designed, implemented and verified."
      />
      <FlagshipSection />
      <CapabilitiesSection />
      <DeliverablesSection />
      <EndToEndSection />
      <CommercialSection />
      <FinalCtaSection />
    </>
  );
}
