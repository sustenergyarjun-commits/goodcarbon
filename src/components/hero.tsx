const heroImage = { url: "/assets/hero.png" };
import { Container, Cta } from "./ui-kit";

export function Hero() {
  return (
    <section className="relative bg-deep">
      <h1 className="sr-only">
        Good Carbon — Transforming Energy into Profitability through decarbonisation and energy
        optimisation
      </h1>
      <div className="relative mx-auto w-full max-w-[1600px]">
        <img
          src={heroImage.url}
          alt="Good Carbon — Transforming Energy into Profitability through Decarbonisation and Energy Optimisation"
          width={1536}
          height={1024}
          fetchPriority="high"
          decoding="async"
          className="mx-auto h-auto w-full object-contain md:max-h-[86vh]"
        />
      </div>
      <div className="border-t border-white/10 bg-deep">
        <Container className="flex flex-wrap items-center gap-4 py-6">
          <Cta href="#request" variant="white">
            Request Service Today
          </Cta>
          <Cta to="/strategy" variant="light">
            Explore Our Strategy
          </Cta>
        </Container>
      </div>
    </section>
  );
}
