import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/utils/scroll-to-section";
import { navItems } from "./configs/nav-items.config";
import useScrollActive from "../../hooks/use-scroll-active";
import ThemeSwitcher from "./theme-switcher";
import BarsSwitcher from "./bars-switcher";

function Navbar() {
  const [entered, setEntered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-4 right-4 z-50 ${entered ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} transition-all duration-300 ease`}
    >
      <div className="w-full sm:max-w-auto h-auto sm:mx-auto flex items-center justify-between sm:justify-center gap-2">
        <div className="w-10.5 h-10 flex items-center justify-center shadow-xl border border-solid border-subtle bg-white rounded-full sm:hidden">
          <BarsSwitcher isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
        </div>

        <div className="hidden p-1 shadow-xl border border-solid border-subtle bg-white rounded-full sm:block">
          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`py-1 px-3 text-sm font-normal rounded-full transition-colors duration-300 ease cursor-pointer ${isHome && activeSection === item.id ? "bg-accent text-inverse-primary shadow-md" : "text-secondary-text hover:text-accent"}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-10.5 h-10 flex items-center justify-center shadow-xl border border-solid border-subtle bg-white rounded-full">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
