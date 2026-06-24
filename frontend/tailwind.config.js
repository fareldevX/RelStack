/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        page: "var(--bg-page)",
        section: "var(--bg-section)",
        surface: "var(--bg-surface)",
        error: "var(--bg-error)",
        accent: "var(--color-accent)",

        "secondary-bg": "var(--bg-secondary)",
        "form-bg": "var(--bg-form)",
        "input-bg": "var(--bg-input)",
        "navbar-bg": "var(--bg-navbar)",
        "navbar-bg-open": "var(--bg-navbar-open)",

        "primary-text": "var(--text-primary)",
        "secondary-text": "var(--text-secondary)",
        "inverse-primary": "var(--text-inverse-primary)",
        "inverse-secondary": "var(--text-inverse-secondary)",

        "btn-primary": "var(--btn-bg-primary)",
        "btn-primary-hover": "var(--btn-bg-primary-hover)",

        "chip-secondary": "var(--chip-bg-secondary)",
        "chip-secondary-hover": "var(--chip-bg-secondary-hover)",
        "chip-secondary-text": "var(--chip-text-secondary)",
      },
      borderColor: {
        subtle: "var(--border-subtle)",
        semibold: "var(--border-semibold)",
        inverse: "var(--border-inverse)",
        navbar: "var(--border-navbar)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      animation: {
        "spin-fast": "spin 0.8s linear infinite",
      },
    },
  },
  plugins: [],
};
