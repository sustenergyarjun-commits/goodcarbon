import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  IndustriesSection,
  CapabilitiesSection,
  EndToEndSection,
  FinalCtaSection,
} from "@/components/sections";

const title = "Industries We Serve | Industrial, Healthcare & Commercial Energy Optimisation";
const description =
  "Good Carbon serves manufacturing industries, hospitals and healthcare facilities, commercial buildings, hospitality and data centers with energy optimisation and decarbonisation programmes.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors"
        title="Industries We Serve"
        intro="Sector-specific energy optimisation for facilities where reliability, cost and uptime define performance."
      />
      <IndustriesSection />
      <CapabilitiesSection />
      <EndToEndSection />
      <FinalCtaSection />
    </>
  );
}
