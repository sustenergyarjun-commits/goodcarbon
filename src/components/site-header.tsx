import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Strategy", to: "/strategy" },
  { label: "Solutions", to: "/solutions" },
  { label: "Industries", to: "/industries" },
  { label: "Training", to: "/training" },
  { label: "Impact", to: "/impact" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-white/95 backdrop-blur-md shadow-[0_10px_30px_-24px_rgba(20,35,40,0.9)]"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center" aria-label="Good Carbon home">
          <img
            src={logo.url}
            alt="Good Carbon Pvt. Ltd. logo"
            width={1920}
            height={960}
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? "h-8" : "h-9 sm:h-10"
            }`}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground after:scale-x-100" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-slate-brand after:transition-transform after:duration-300 hover:text-foreground hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-5 py-3 text-xs font-bold tracking-wider text-primary-foreground uppercase transition-colors hover:bg-deep lg:inline-flex"
          >
            Request a Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-border lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 bg-foreground transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-foreground transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-white lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <li key={item.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="block py-3.5 text-base font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 sm:px-8">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center rounded-sm bg-primary px-5 py-4 text-sm font-bold tracking-wider text-primary-foreground uppercase"
            >
              Request a Consultation
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
