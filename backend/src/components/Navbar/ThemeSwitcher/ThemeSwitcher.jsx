import { useState, useRef } from "react";
import useTheme from "../../../Hooks/useTheme";
import useClickOutside from "../../../Hooks/useClickOutside";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeSwitcher.module.css";

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => setIsOpen(false), isOpen);

  const { theme, setTheme } = useTheme();

  const buttons = [
    { label: "Light", mode: "light" },
    { label: "Dark", mode: "dark" },
    { label: "System", mode: "system" },
  ];

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {buttons.map(({ label, mode }) => (
            <button
              key={mode}
              onClick={() => {
                setTheme(mode);
                setIsOpen(false);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
