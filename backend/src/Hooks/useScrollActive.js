import { useEffect } from "react";

function useScrollActive(navItems, setActiveSection) {
  useEffect(() => {
    if (!navItems || navItems.length === 0) return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const { id } of navItems) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, setActiveSection]);
}

export default useScrollActive;
