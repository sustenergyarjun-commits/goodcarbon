import strategyImage from "@/assets/strategy.png.asset.json";
import { Reveal } from "./reveal";
import { Card, Container, Cta, FlowChain, SectionHeading } from "./ui-kit";

/* ---------------- Flagship service ---------------- */

export function FlagshipSection() {
  return (
    <section id="flagship" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Flagship Service"
            title="EBITDA Improvement through Decarbonisation"
            intro="Good Carbon identifies, designs and implements high-impact energy optimisation and decarbonisation projects. Every engagement is structured so that technical work translates into financial performance — not just a report."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <ul className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
              {[
                ["Operating margins", "Direct improvement of margin through lower energy spend."],
                ["Energy cost per unit output", "Reduced specific energy consumption across processes."],
                ["Asset efficiency", "Higher output from the same installed equipment base."],
                ["Productivity", "Reliable systems that keep production running."],
              ].map(([title, copy]) => (
                <li key={title} className="bg-card p-6">
                  <h3 className="text-base font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-sm bg-deep p-8 text-white sm:p-10">
              <p className="eyebrow text-silver">The value chain</p>
              <ol className="mt-8 space-y-0">
                {[
                  "Energy Losses",
                  "Optimisation",
                  "Savings",
                  "Operational Excellence",
                  "EBITDA Improvement",
                ].map((step, i, arr) => (
                  <li key={step}>
                    <div className="flex items-center gap-4">
                      <span className="w-8 shrink-0 text-xs font-bold text-silver">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`text-lg font-bold tracking-tight ${
                          i === arr.length - 1 ? "text-white" : "text-silver"
                        }`}
                      >
                        {step}
                      </span>
                    </div>
                    {i < arr.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="my-2 ml-3.5 block h-6 w-px bg-linear-to-b from-silver/60 to-silver/10"
                      />
                    ) : null}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- About ---------------- */

export function AboutSection() {
  return (
    <section id="about" className="border-y border-border bg-secondary py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About Good Carbon"
              title="India’s Trusted Partner in Decarbonisation & Energy Optimisation"
              intro="Good Carbon Pvt. Ltd. is a premium decarbonisation and energy optimisation company committed to delivering measurable EBITDA improvement through structured energy management and sustainability strategies."
            />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              The company is backed by a consortium of experienced engineering and sustainability
              professionals, combining deep technical capability with a commercial view of every
              investment.
            </p>
          </Reveal>

          <Reveal delay={120} className="grid gap-6 sm:grid-cols-2 lg:content-center">
            <div className="rounded-sm border border-border bg-card p-6">
              <h3 className="text-sm font-bold tracking-wider uppercase">We work with</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Industries</li>
                <li>Commercial establishments</li>
                <li>Healthcare institutions</li>
              </ul>
            </div>
            <div className="rounded-sm border border-border bg-card p-6">
              <h3 className="text-sm font-bold tracking-wider uppercase">We focus on</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>Reducing energy costs</li>
                <li>Improving operational efficiency</li>
                <li>Accelerating profitability</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Philosophy ---------------- */

export function PhilosophySection() {
  return (
    <section id="philosophy" className="bg-deep py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Core Philosophy"
            title="Decarbonisation is not a cost — it is a profitability engine."
            tone="light"
          />
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-white/10 sm:grid-cols-3">
            {[
              ["Energy losses", "Profit gains"],
              ["Inefficiencies", "Measurable savings"],
              ["Sustainability", "EBITDA growth"],
            ].map(([from, to]) => (
              <li key={from} className="bg-deep p-8">
                <p className="text-sm tracking-wide text-silver uppercase">{from}</p>
                <p aria-hidden="true" className="mt-3 text-silver">
                  &darr;
                </p>
                <p className="mt-3 text-xl font-extrabold tracking-tight">{to}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Strategy + Image 2 ---------------- */

const PILLARS = [
  ["Energy Efficiency", "Optimising energy use to reduce waste and costs."],
  ["Decarbonisation", "Reducing carbon footprint through cleaner and smarter solutions."],
  ["Operational Excellence", "Enhancing reliability, productivity and system performance."],
  [
    "Profitability Enhancement",
    "Turning efficiency and sustainability into measurable EBITDA growth.",
  ],
];

export function StrategySection() {
  return (
    <section id="strategy" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Unique Advantage"
            title="The Good Carbon Strategy"
            intro="A structured approach that integrates energy efficiency, decarbonisation, operational excellence and profitability enhancement."
          />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold tracking-wider uppercase text-muted-foreground">
              A structured approach that integrates:
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {PILLARS.map(([title, copy]) => (
                <li key={title} className="py-5">
                  <h3 className="text-lg font-bold tracking-tight">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <figure className="rounded-sm border border-slate-brand/60 bg-deep p-4 shadow-[0_30px_80px_-50px_rgba(20,35,40,0.9)] sm:p-6">
              <img
                src={strategyImage.url}
                alt="The Good Carbon Strategy — Energy Intelligence, System Optimisation, Reliability Enhancement, Process Re-engineering, CAPEX/OPEX Optimisation and Performance Verification leading to EBITDA Improvement"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-sm object-contain transition-transform duration-500 hover:scale-[1.015]"
              />
            </figure>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Methodology ---------------- */

const STAGES: Array<[string, string, string[]]> = [
  [
    "01",
    "Detailed Energy Intelligence",
    ["Historical energy data analysis", "Load profiling and consumption mapping", "Identification of hidden losses"],
  ],
  [
    "02",
    "System-Level Performance Optimisation",
    [
      "Transformers, motors and DG sets",
      "HVAC systems, chillers, cooling towers and AHUs",
      "Compressors, pumps and lighting systems",
    ],
  ],
  [
    "03",
    "Power Quality & Reliability Enhancement",
    ["Harmonic analysis", "Power factor correction", "Load balancing and system stabilisation"],
  ],
  [
    "04",
    "Process Re-engineering",
    ["Optimising manufacturing processes", "Reducing energy intensity per unit output"],
  ],
  [
    "05",
    "CAPEX & OPEX Optimisation",
    ["High-return energy projects", "Quick-payback implementation strategies"],
  ],
  [
    "06",
    "Implementation & Performance Verification",
    ["End-to-end project support", "Measurement & verification of savings"],
  ],
];

export function MethodologySection() {
  return (
    <section id="methodology" className="border-y border-border bg-secondary py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Six-stage methodology"
            title="How We Deliver EBITDA Growth"
          />
        </Reveal>

        <ol className="mt-14 border-l border-border pl-6 sm:pl-10">
          {STAGES.map(([num, title, points], i) => (
            <Reveal as="li" key={num} delay={i * 60} className="relative pb-12 last:pb-0">
              <span
                aria-hidden="true"
                className="absolute top-2 -left-[1.9rem] h-2.5 w-2.5 rounded-full bg-slate-brand sm:-left-[2.9rem]"
              />
              <p className="eyebrow text-muted-foreground">{num}</p>
              <h3 className="mt-2 text-xl font-extrabold tracking-tight sm:text-2xl">{title}</h3>
              <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                {points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden="true" className="text-silver">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ---------------- Deliverables ---------------- */

export function DeliverablesSection() {
  const items = [
    ["Quantified Energy Savings", "Expressed in kWh and ₹."],
    ["Project Feasibility & ROI Analysis", "Investment-grade evaluation of each measure."],
    ["Implementation Roadmap", "Sequenced actions with clear ownership."],
    ["Performance Benchmarking", "System and process performance against reference levels."],
    ["Verified EBITDA Impact", "Savings measured, verified and reported."],
  ];
  return (
    <section id="deliverables" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Key deliverables" title="What You Receive" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, copy], i) => (
            <Reveal key={title} delay={i * 60}>
              <Card title={title} index={String(i + 1).padStart(2, "0")}>
                {copy}
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */

export function CapabilitiesSection() {
  const items = [
    ["Electrical Safety, Reliability & Efficiency", "Safe, stable and efficient electrical systems."],
    ["HVAC Optimisation", "Chillers and cooling towers."],
    ["Power Distribution Systems", "Distribution performance and load management."],
    ["Diesel Generator Optimisation", "Efficient and reliable back-up power operation."],
    ["Renewable Integration", "Solar PV systems."],
    ["Air Compressors & Pump Systems", "Compressed air and pumping efficiency."],
  ];
  return (
    <section id="capabilities" className="border-y border-border bg-secondary py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Technical capabilities" title="Engineering Expertise" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, copy], i) => (
            <Reveal key={title} delay={i * 60}>
              <Card title={title}>{copy}</Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Industries ---------------- */

export function IndustriesSection() {
  const items = [
    "Manufacturing Industries",
    "Hospitals & Healthcare Facilities",
    "Commercial Buildings",
    "Hospitality Sector",
    "Data Centers & IT Parks",
  ];
  return (
    <section id="industries" className="bg-deep py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Sectors" title="Industries We Serve" tone="light" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((title, i) => (
            <Reveal key={title} delay={i * 60}>
              <Card tone="light" title={title} index={String(i + 1).padStart(2, "0")} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- End to end ---------------- */

export function EndToEndSection() {
  return (
    <section id="delivery" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="End-to-end delivery"
            title="From Audit to Execution"
            intro="Good Carbon’s strategic associations enable end-to-end solutions — from the first assessment through to verified performance."
          />
        </Reveal>
        <Reveal delay={100} className="mt-10">
          <FlowChain
            steps={["Assess", "Analyse", "Design", "Optimise", "Implement", "Measure & Verify"]}
          />
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-12 text-3xl font-extrabold tracking-tight sm:text-4xl">
            We go beyond audits.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ---------------- Training ---------------- */

export function TrainingSection() {
  const items = [
    ["Energy Management Training", "Building in-house capability to sustain savings."],
    ["Electrical Safety Programs", "Safe practice across electrical systems and teams."],
    ["Productivity Enhancement Workshops", "Practical improvement of throughput and reliability."],
    ["Leadership Coaching for Cost Optimisation", "Aligning leadership around cost and energy goals."],
  ];
  return (
    <section id="training" className="border-y border-border bg-secondary py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Capability building" title="Training & Leadership Coaching" />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map(([title, copy], i) => (
            <Reveal key={title} delay={i * 60}>
              <Card title={title}>{copy}</Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Why choose ---------------- */

export function WhyChooseSection() {
  const items = [
    "Proven Expertise Across Industries",
    "End-to-End Service Delivery",
    "Strong Technical + Strategic Capability",
    "Focus on Measurable Results — Not Reports",
    "Direct Linkage to EBITDA Improvement",
  ];
  return (
    <section id="why" className="bg-background py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Differentiators" title="Why Choose Good Carbon" />
        </Reveal>
        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <li key={item} className="bg-card p-7">
              <span className="eyebrow text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-bold tracking-tight">{item}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ---------------- Impact ---------------- */

export function ImpactSection() {
  const items = [
    "Significant energy cost reduction",
    "Improved operational reliability",
    "Enhanced productivity",
    "Faster ROI on energy investments",
    "Sustainable and scalable growth",
  ];
  return (
    <section id="impact" className="bg-deep py-20 text-white sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Business impact"
            title="Energy Optimisation That Delivers Business Impact"
            tone="light"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((title, i) => (
            <Reveal key={title} delay={i * 60}>
              <Card tone="light" title={title} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Associations ---------------- */

export function AssociationsSection() {
  const items = ["Sustenergy Foundation", "VSL Prayag Energy Systems & Services", "Vodaluft Energy Techniks"];
  return (
    <section id="associations" className="border-y border-border bg-secondary py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Ecosystem"
            title="Strategic Associations"
            intro="Together, these strategic associations enable Good Carbon to provide end-to-end solutions — from audit to execution."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map((title, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="flex h-full items-center rounded-sm border border-border bg-card p-8">
                <p className="text-lg font-extrabold tracking-tight">{title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Commercial model ---------------- */

export function CommercialSection() {
  return (
    <section id="commercial" className="bg-background py-20 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Commercial model"
              title="Flexible & Value-Driven Commercial Models"
              intro="Pricing is aligned with project size, industry type and expected savings, so the commercial structure reflects the value created."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-sm bg-deep p-10 text-white">
              <p className="eyebrow text-silver">Focus</p>
              <p className="mt-4 text-3xl font-extrabold tracking-tight">High ROI for clients</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCtaSection() {
  return (
    <section className="bg-deep py-24 text-white sm:py-32">
      <Container>
        <Reveal className="max-w-4xl">
          <p className="eyebrow text-silver">Let’s begin</p>
          <h2 className="mt-5 text-3xl leading-[1.08] font-extrabold tracking-tight sm:text-5xl">
            Build a more efficient, profitable & sustainable future
          </h2>
          <p className="mt-8 border-l-2 border-silver/50 pl-5 text-xl text-silver italic sm:text-2xl">
            “Energy efficiency is the fastest way to improve profitability.”
          </p>
          <p className="mt-10 text-2xl font-extrabold tracking-tight sm:text-3xl">
            At Good Carbon, we go beyond audits.
          </p>
          <p className="mt-3 text-lg font-semibold text-silver">
            We deliver measurable EBITDA improvement through decarbonisation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Cta to="/contact" variant="white">
              Start Your Energy Optimisation Journey
            </Cta>
            <Cta to="/contact" variant="light">
              Talk to Good Carbon
            </Cta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
