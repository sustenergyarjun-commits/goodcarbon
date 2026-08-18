import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import {
  ImpactSection,
  WhyChooseSection,
  AssociationsSection,
  CommercialSection,
  FinalCtaSection,
} from "@/components/sections";

const title = "Business Impact | Energy Cost Reduction & EBITDA Improvement";
const description =
  "Energy optimisation that delivers business impact: lower energy costs, improved reliability, enhanced productivity, faster ROI and sustainable, scalable growth.";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/impact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Outcomes"
        title="Energy Optimisation That Delivers Business Impact"
        intro="Results measured where they matter — in operating cost, reliability and EBITDA."
      />
      <ImpactSection />
      <WhyChooseSection />
      <AssociationsSection />
      <CommercialSection />
      <FinalCtaSection />
    </>
  );
}
