import { useState, type FormEvent } from "react";
import { Container, SectionHeading } from "./ui-kit";
import { Reveal } from "./reveal";

const SERVICES = [
  "Energy Audit & Energy Intelligence",
  "System-Level Performance Optimisation",
  "Power Quality & Reliability Enhancement",
  "Process Re-engineering",
  "CAPEX & OPEX Optimisation",
  "Renewable Integration (Solar PV)",
  "Training & Leadership Coaching",
];

type Errors = Record<string, string>;

export function RequestForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};

    if (!get("industry")) next["industry"] = "Please enter your industry or company name.";
    if (!get("name")) next["name"] = "Please enter your name.";
    const email = get("email");
    if (!email) next["email"] = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next["email"] = "Enter a valid email address.";
    const phone = get("phone");
    if (!phone) next["phone"] = "Please enter your phone number.";
    else if (!/^[+\d][\d\s-]{7,17}$/.test(phone)) next["phone"] = "Enter a valid phone number.";
    if (!get("location")) next["location"] = "Please enter your location.";
    if (!get("service")) next["service"] = "Please select a service.";
    if (get("message").length > 1000) next["message"] = "Message must be under 1000 characters.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const field =
    "mt-2 w-full rounded-sm border border-input bg-white px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-slate-brand";
  const label = "text-xs font-bold tracking-wider uppercase text-muted-foreground";

  return (
    <section id="request" className="border-y border-border bg-secondary py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Get started" title="Request Service Today" />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          {sent ? (
            <div
              role="status"
              className="rounded-sm border border-slate-brand/30 bg-card p-10 text-center"
            >
              <p className="eyebrow text-muted-foreground">Request received</p>
              <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
                Thank you — your request has been recorded.
              </h3>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                A Good Carbon specialist will review your requirement and respond shortly. For an
                immediate conversation, call{" "}
                <a href="tel:+919381790065" className="font-semibold text-foreground underline">
                  +91 93817 90065
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-8 rounded-sm border border-slate-brand/30 px-6 py-3 text-xs font-bold tracking-wider uppercase transition-colors hover:bg-secondary"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form
              noValidate
              onSubmit={onSubmit}
              className="grid gap-6 rounded-sm border border-border bg-card p-6 sm:grid-cols-2 sm:p-10"
            >
              {([
                ["industry", "Industry Name", "text", "e.g. Manufacturing / Hospital"],
                ["name", "Name", "text", "Full name"],
                ["email", "Email", "email", "you@company.com"],
                ["phone", "Phone", "tel", "+91 00000 00000"],
                ["location", "Location", "text", "City, State"],
              ] as Array<[string, string, string, string]>).map(([name, labelText, type, placeholder]) => (
                <div key={name}>
                  <label className={label} htmlFor={name}>
                    {labelText}
                  </label>
                  <input
                    id={name}
                    name={name}
                    type={type}
                    maxLength={120}
                    placeholder={placeholder}
                    aria-invalid={errors[name] ? true : undefined}
                    aria-describedby={errors[name] ? `${name}-error` : undefined}
                    className={field}
                  />
                  {errors[name] ? (
                    <p id={`${name}-error`} className="mt-2 text-xs font-semibold text-destructive">
                      {errors[name]}
                    </p>
                  ) : null}
                </div>
              ))}

              <div>
                <label className={label} htmlFor="service">
                  Service Required
                </label>
                <select id="service" name="service" defaultValue="" className={field}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors["service"] ? (
                  <p className="mt-2 text-xs font-semibold text-destructive">{errors["service"]}</p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <label className={label} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="Tell us about your facility, systems and objectives."
                  className={field}
                />
                {errors["message"] ? (
                  <p className="mt-2 text-xs font-semibold text-destructive">{errors["message"]}</p>
                ) : null}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-primary px-8 py-4 text-sm font-bold tracking-wider text-primary-foreground uppercase transition-all duration-300 hover:bg-deep hover:-translate-y-0.5 sm:w-auto"
                >
                  Get Service
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
