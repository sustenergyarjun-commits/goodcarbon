import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { AboutSection, PhilosophySection, WhyChooseSection, AssociationsSection, FinalCtaSection } from "@/components/sections";

const title = "About Good Carbon | Decarbonisation & Energy Optimisation Partner";
const description =
  "Good Carbon Pvt. Ltd. is a premium decarbonisation and energy optimisation company delivering measurable EBITDA improvement for industries, commercial establishments and healthcare institutions.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="India’s Trusted Partner in Decarbonisation & Energy Optimisation"
        intro="A strategic energy optimisation and decarbonisation partner — backed by a consortium of experienced engineering and sustainability professionals."
      />
      <AboutSection />
      <PhilosophySection />
      <WhyChooseSection />
      <AssociationsSection />
      <FinalCtaSection />
    </>
  );
}
