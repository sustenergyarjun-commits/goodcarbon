import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { TrainingSection, WhyChooseSection, FinalCtaSection } from "@/components/sections";

const title = "Training & Leadership Coaching | Energy Management Capability Building";
const description =
  "Energy management training, electrical safety programs, productivity enhancement workshops and leadership coaching for cost optimisation from Good Carbon.";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/training" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Capability building"
        title="Training & Leadership Coaching"
        intro="Programmes that embed energy performance, safety and cost discipline inside your own teams."
      />
      <TrainingSection />
      <WhyChooseSection />
      <FinalCtaSection />
    </>
  );
}
