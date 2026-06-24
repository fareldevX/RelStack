import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "@/lib/utils/scroll-to-section";
import { navItems } from "./configs/nav-items.config";
import useScrollActive from "../../hooks/use-scroll-active";
import Container from "@/components/ui/container";
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
    const timer = setInterval(() => setEntered(true), 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav
      className={`fixed top-3 left-0 right-0 z-50 ${entered ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"} transition-all duration-300 ease`}
    >
      <Container className="flex items-center justify-center">
        <div className="w-full sm:max-w-auto h-auto sm:mx-auto flex items-center justify-between sm:justify-center gap-2">
          <div className="p-1 shadow-xl border border-solid border-subtle bg-navbar-bg rounded-full sm:hidden">
            <BarsSwitcher isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
          </div>

          <div className="hidden p-1 shadow-xl border border-solid border-subtle bg-navbar-bg rounded-full sm:block">
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

          <div className="p-1 shadow-xl border border-solid border-subtle bg-navbar-bg rounded-full">
            <ThemeSwitcher />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
