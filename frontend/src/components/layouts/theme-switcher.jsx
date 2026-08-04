import { useState, useRef } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { themeItems } from "./configs/theme.config";
import useTheme from "../../hooks/use-theme";
import useClickOutside from "../../hooks/use-click-outside";

function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => setIsOpen(false), isOpen);

  const { theme, setTheme } = useTheme();

  return (
    <div ref={wrapperRef} className="relative">
      <button
        className="flex items-center rounded-full border-none bg-transparent py-1.5 px-2 text-secondary cursor-pointer transition-colors duration-300 hover:text-primary dark:hover:text-surface"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <FiSun size={19} /> : <FiMoon size={19} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-[130%] min-w-30 overflow-hidden rounded-xl border border-color-border/60 dark:border-color-dark-border/60 bg-surface/80 dark:bg-primary/80 p-1 shadow-sm">
          {themeItems.map(({ label, mode }) => (
            <button
              key={mode}
              className="w-full rounded-md border-none bg-transparent p-2 text-left text-xs font-medium text-secondary transition-colors hover:bg-primary dark:hover:bg-surface hover:text-surface dark:hover:text-primary cursor-pointer"
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
