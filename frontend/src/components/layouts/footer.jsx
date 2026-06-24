import { navItems } from "./configs/nav-items.config";
import { socialLinks } from "./configs/social-links.config";
import { scrollToSection } from "@/lib/utils/scroll-to-section";
import Container from "@/components/ui/container";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative z-2 overflow-hidden border-t border-inverse/15 bg-secondary-bg text-inverse-primary"
      role="contentinfo"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        aria-hidden
      >
        <span
          className="max-w-[100vw] select-none px-4 text-center font-extrabold tracking-tight text-inverse-primary/6 dark:text-white/8"
          style={{
            fontSize: "clamp(3.5rem, 18vw, 14rem)",
            lineHeight: 0.85,
          }}
        >
          RelStack
        </span>
      </div>

      <Container className="relative z-10 px-4 py-14 sm:px-5 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-12">
          <div className="flex min-w-0 flex-col md:col-span-2 lg:col-span-1">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-inverse-secondary">
              Portfolio
            </p>
            <h2 className="mb-3 text-lg font-semibold tracking-tight text-inverse-primary sm:text-xl">
              RelStack
            </h2>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-inverse-secondary sm:text-base">
              A professional portfolio built with modern web technology. Focused
              on clean interfaces, solid performance, and thoughtful user
              experience.
            </p>

            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-inverse-secondary">
              Connect
            </p>
            <ul className="flex flex-wrap gap-2 sm:gap-3" role="list">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/90 text-inverse-primary shadow-sm transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-accent hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-primary sm:h-10 sm:w-10"
                  >
                    <Icon className="h-5 w-5 shrink-0" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav
            className="flex min-w-0 flex-col border-t border-inverse/10 pt-10 md:border-t-0 md:pt-0 lg:border-t-0"
            aria-label="Footer quick links"
          >
            <h3 className="mb-4 text-base font-semibold text-inverse-primary">
              Quick links
            </h3>
            <ul className="flex flex-col gap-2 sm:gap-3" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="text-left text-sm text-inverse-secondary transition-[color,transform] duration-200 hover:translate-x-0.5 hover:text-inverse-primary focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-primary sm:text-base"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <address className="flex min-w-0 flex-col not-italic border-t border-inverse/10 pt-10 md:border-t-0 md:pt-0">
            <h3 className="mb-4 text-base font-semibold text-inverse-primary">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4" role="list">
              <li>
                <a
                  href="tel:+6282322472552"
                  className="text-sm text-inverse-secondary transition-colors duration-200 hover:text-inverse-primary focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-primary sm:text-base"
                >
                  +62 8232 2472 552
                </a>
              </li>
              <li>
                <a
                  href="mailto:farelarlishorlandoo@gmail.com"
                  className="break-all text-sm text-inverse-secondary transition-colors duration-200 hover:text-inverse-primary focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-primary sm:text-base"
                >
                  farelarlishorlandoo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Jl.+Pagenjahan+RT%2F25+RW%2F04%2C+Tegal%2C+Jawa+Tengah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-md text-sm leading-relaxed text-inverse-secondary transition-colors duration-200 hover:text-inverse-primary focus-visible:rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-primary sm:text-base"
                >
                  Jl. Pagenjahan RT/25 RW/04, Tegal, Jawa Tengah
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-inverse/15 pt-8 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:pt-10">
          <p className="text-xs text-inverse-secondary sm:text-sm">
            © {year} RelStack. All rights reserved.
          </p>
          <p className="text-xs text-inverse-secondary sm:text-sm">
            Crafted with care — React and modern tooling.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
