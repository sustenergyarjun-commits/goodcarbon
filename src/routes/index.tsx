import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import {
  AboutSection,
  FinalCtaSection,
  FlagshipSection,
  IndustriesSection,
  MethodologySection,
  PhilosophySection,
  StrategySection,
} from "@/components/sections";
import { RequestForm } from "@/components/request-form";

const title = "Good Carbon | Decarbonisation & Energy Optimisation Company in India";
const description =
  "Good Carbon helps industries, commercial establishments and healthcare institutions reduce energy costs, improve operational efficiency and achieve measurable EBITDA improvement through decarbonisation and energy optimisation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Good Carbon Pvt. Ltd.",
          description,
          email: "goodcarbon.energy@gmail.com",
          telephone: "+91 93817 90065",
          address: {
            "@type": "PostalAddress",
            streetAddress: "#73 Jasmine House, Tass Industrial Area, Ambattur",
            addressLocality: "Chennai",
            postalCode: "600098",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FlagshipSection />
      <AboutSection />
      <PhilosophySection />
      <StrategySection />
      <MethodologySection />
      <IndustriesSection />
      <RequestForm />
      <FinalCtaSection />
    </>
  );
}
