import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";
import { NAV } from "./site-header";
import { Container } from "./ui-kit";

export function SiteFooter() {
  return (
    <footer className="bg-deep text-white">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-sm bg-white px-4 py-3">
              <img
                src={logo.url}
                alt="Good Carbon Pvt. Ltd. logo"
                width={1920}
                height={960}
                loading="lazy"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="mt-6 text-base font-bold">Good Carbon Pvt. Ltd.</p>
            <p className="mt-1 text-sm text-silver">Transforming Energy into Profitability</p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-silver">Navigate</p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-silver transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <address className="not-italic">
            <p className="eyebrow text-silver">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-silver">
              <li>
                <a href="mailto:goodcarbon.energy@gmail.com" className="hover:text-white">
                  goodcarbon.energy@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919381790065" className="hover:text-white">
                  +91 93817 90065
                </a>
              </li>
              <li className="max-w-xs leading-relaxed">
                #73 Jasmine House, Tass Industrial Area, Ambattur, Chennai – 600098, India
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-xs text-silver">
            © 2026 Good Carbon Pvt. Ltd. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
