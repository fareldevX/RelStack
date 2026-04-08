import { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useClickOutside from "../../../Hooks/useClickOutside";
import useScrollActive from "../../../Hooks/useScrollActive";
import { scrollToSection } from "../../../utils/scrollToSection";
import { FaBars } from "react-icons/fa";
import styles from "./BarsSwitcher.module.css";

function BarsSwitcher({ isOpen, setIsOpen }) {
  const [activeSection, setActiveSection] = useState("home");

  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef, () => setIsOpen(false), isOpen);

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

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button
        className={styles.triggerNav}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <FaBars size={20} />
      </button>

      <div className={`${styles.navLinksMobile} ${isOpen ? styles.open : ""}`}>
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            className={`${styles.navItemMobile} ${
              isHome && activeSection === id ? styles.active : ""
            }`}
            onClick={() => {
              handleNavClick(id);
              setIsOpen((prev) => !prev);
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BarsSwitcher;
