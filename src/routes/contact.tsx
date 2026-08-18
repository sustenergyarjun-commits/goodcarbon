import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { RequestForm } from "@/components/request-form";
import { Container, SectionHeading } from "@/components/ui-kit";
import { Reveal } from "@/components/reveal";
import { FinalCtaSection } from "@/components/sections";

const title = "Contact Good Carbon | Request an Energy Optimisation Consultation";
const description =
  "Talk to Good Carbon Pvt. Ltd. in Chennai about energy audits, decarbonisation and energy optimisation programmes that improve EBITDA. Email jk@goodcarbon.in or call +91 93817 90065.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to Good Carbon"
        intro="Share your facility profile and objectives — we will respond with the right starting point."
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Get in touch" title="Good Carbon Pvt. Ltd." />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            <div className="bg-card p-7">
              <h3 className="eyebrow text-muted-foreground">Head Office</h3>
              <address className="mt-4 text-sm leading-relaxed not-italic">
                #73 Jasmine House, Tass Industrial Area, Ambattur, Chennai – 600098, India
              </address>
            </div>
            <div className="bg-card p-7">
              <h3 className="eyebrow text-muted-foreground">Email</h3>
              <p className="mt-4 text-sm">
                <a
                  href="mailto:jk@goodcarbon.in"
                  className="block font-semibold underline underline-offset-4"
                >
                  jk@goodcarbon.in
                </a>
                <a
                  href="mailto:sudheer@goodcarbon.in"
                  className="mt-2 block font-semibold underline underline-offset-4"
                >
                  sudheer@goodcarbon.in
                </a>
              </p>
            </div>
            <div className="bg-card p-7">
              <h3 className="eyebrow text-muted-foreground">Phone</h3>
              <p className="mt-4 text-sm">
                <a href="tel:+919381790065" className="font-semibold underline underline-offset-4">
                  +91 93817 90065
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>

      <RequestForm />
      <FinalCtaSection />
    </>
  );
}
