import { useState, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils/scroll-to-section";
import { navItems } from "./configs/nav-items.config";
import useScrollActive from "../../hooks/use-scroll-active";

const MENU_TRANSITION_MS = 520;

function BarsSwitcher({ isOpen, setIsOpen }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuMounted, setMenuMounted] = useState(false);
  const [menuEntered, setMenuEntered] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: section } });
      return;
    }
    scrollToSection(section);
  };

  const isHome = location.pathname === "/";

  useScrollActive(navItems, setActiveSection);

  useLayoutEffect(() => {
    const menuNotEntered = () => {
      setMenuEntered(false);
    };

    const menuMounted = () => {
      setMenuMounted(true);
      setMenuEntered(false);
    };

    if (!isOpen) {
      menuNotEntered();
      return;
    }

    menuMounted();
    let raf2 = 0;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setMenuEntered(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) return;
    const t = window.setTimeout(
      () => setMenuMounted(false),
      MENU_TRANSITION_MS,
    );
    return () => window.clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!menuMounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuMounted]);

  useEffect(() => {
    if (!menuMounted) return;
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuMounted, setIsOpen]);

  const mobileMenu =
    typeof document !== "undefined" && menuMounted
      ? createPortal(
          <div
            id="mobile-nav-overlay"
            className={`fixed inset-0 z-48 sm:hidden ${menuMounted ? "pointer-events-auto" : "pointer-events-none"}`}
            aria-hidden={!(isOpen || menuEntered)}
            inert={!(isOpen || menuEntered)}
          >
            <button
              type="button"
              aria-label="Close navigation menu"
              className={`absolute inset-0 z-0 border-none bg-primary-text/20 backdrop-blur-[3px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-black/50 ${menuEntered ? "opacity-100" : "opacity-0"}`}
              onClick={() => setIsOpen(false)}
            />

            <div
              className={`pointer-events-none absolute inset-0 z-1 flex flex-col bg-linear-to-b from-navbar-bg-open via-navbar-bg-open/95 to-page px-6 pb-10 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4.25rem)] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.5)] ${menuEntered ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
              <div className="pointer-events-auto mb-6 flex shrink-0 items-center justify-between border-b border-subtle/80 pb-5">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-secondary-text">
                  Menu
                </p>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-subtle bg-surface/80 text-secondary-text shadow-sm transition-[color,background-color,transform,box-shadow] duration-300 hover:border-accent/40 hover:bg-accent/10 hover:text-primary-text active:scale-95"
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes size={18} aria-hidden />
                </button>
              </div>

              <nav
                className="pointer-events-auto flex min-h-0 flex-1 flex-col justify-center gap-1.5"
                aria-label="Main navigation"
              >
                {navItems.map(({ label, id }, index) => {
                  const active = isHome && activeSection === id;
                  const delayMs = 120 + index * 70;
                  return (
                    <button
                      key={id}
                      type="button"
                      className={`group relative overflow-hidden rounded-2xl border border-transparent bg-navbar-bg-open/60 py-4 pl-4 pr-6 text-left text-[clamp(1.35rem,4.5vw,1.85rem)] font-light tracking-tight shadow-sm backdrop-blur-md transition-[transform,opacity,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        active
                          ? "border-subtle bg-accent/20 text-primary-text shadow-md"
                          : "text-secondary-text hover:border-subtle hover:bg-surface hover:text-primary-text"
                      } ${menuEntered ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
                      style={{
                        transitionDelay: menuEntered ? `${delayMs}ms` : "0ms",
                      }}
                      onClick={() => {
                        handleNavClick(id);
                        setIsOpen(false);
                      }}
                    >
                      <span
                        className={`absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-accent transition-[transform,opacity] duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
                        aria-hidden
                      />
                      <span className="relative pl-3">{label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="sm:hidden">
      <button
        className="flex cursor-pointer items-center justify-center rounded-full border-none bg-transparent py-1.5 px-2 text-secondary-text transition-colors duration-300 hover:text-accent"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-overlay"
        aria-label="Toggle navigation"
      >
        <FaBars size={19} />
      </button>

      {mobileMenu}
    </div>
  );
}

export default BarsSwitcher;
