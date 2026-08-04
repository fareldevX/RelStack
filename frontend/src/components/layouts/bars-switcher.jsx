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
              className={`absolute inset-0 z-0 border-none bg-surface/20 dark:bg-primary/20 backdrop-blur-[3px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${menuEntered ? "opacity-100" : "opacity-0"}`}
              onClick={() => setIsOpen(false)}
            />

            <div
              className={`pointer-events-none absolute inset-0 z-1 flex flex-col bg-linear-to-b from-surface dark:from-primary via-surface/95 dark:via-primary/95 to-page dark:to-primary px-6 pb-10 pt-[max(5.5rem,env(safe-area-inset-top,0px)+4.25rem)] shadow-[0_24px_80px_-12px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform dark:shadow-[0_24px_80px_-12px_rgba(0,0,0,0.5)] ${menuEntered ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
              <div className="pointer-events-auto mb-6 flex shrink-0 items-center justify-between border-b border-color-border dark:border-color-dark-border pb-5">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary dark:text-surface">
                  Menu
                </p>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-color-border/60 dark:border-color-dark-border/60 bg-surface/80 dark:bg-primary/80 text-secondary shadow-sm transition-[color,background-color,transform,box-shadow] duration-300 hover:bg-surface/10 dark:bg-primary/10 hover:text-primary dark:hover:text-surface active:scale-95"
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
                      className={`group relative overflow-hidden rounded-2xl border border-transparent py-4 pl-4 pr-6 text-left text-[clamp(1.35rem,4.5vw,1.85rem)] font-light tracking-tight shadow-sm backdrop-blur-md transition-[transform,opacity,background-color,color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        active
                          ? "border-color-border/60 dark:border-color-dark-border/60 bg-surface dark:bg-primary text-primary dark:text-surface shadow-md"
                          : "text-secondary hover:border-color-border dark:hover:border-color-dark-border hover:bg-surface dark:hover:bg-primary hover:text-primary dark:hover:text-surface"
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
                        className={`absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-primary dark:bg-surface transition-[transform,opacity] duration-300 ${active ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
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
        className="flex cursor-pointer items-center justify-center rounded-full border-none bg-transparent py-1.5 px-2 text-secondary transition-colors duration-300 hover:text-primary dark:hover:text-surface"
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
