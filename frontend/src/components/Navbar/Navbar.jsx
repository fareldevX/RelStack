import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollActive from "../../Hooks/useScrollActive";
import { scrollToSection } from "../../utils/scrollToSection";
import Container from "../Container/Container";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import BarsSwitcher from "./BarsSwitcher/BarsSwitcher";
import styles from "./Navbar.module.css";

function Navbar() {
  const [entered, setEntered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

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
    <nav className={styles.float}>
      <Container
        className={`${styles.navbar} ${isMobileOpen && styles.navbarOpen} ${
          entered ? styles.entered : ""
        }`}
      >
        <div className={styles.navContent}>
          <div className={styles.navLogo}>
            <button onClick={() => handleNavClick("home")}>
              <h1 className={styles.logo}>Rel.Design</h1>
            </button>
          </div>

          <div className={styles.navLinks}>
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                className={`${styles.navItem} ${
                  isHome && activeSection === id ? styles.active : ""
                }`}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </button>
            ))}
          </div>

          <div className={styles.navActions}>
            <ThemeSwitcher />
            <BarsSwitcher isOpen={isMobileOpen} setIsOpen={setIsMobileOpen} />
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
