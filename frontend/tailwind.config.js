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
        page: "var(--color-page)",
        "page-dark": "var(--color-page-dark)",

        surface: "var(--color-surface)",
        accent: "var(--color-accent)",

        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",

        "color-border": "var(--color-border)",
        "color-dark-border": "var(--color-border-dark)",
      },
      animation: {
        "spin-fast": "spin 0.8s linear infinite",
      },
    },
  },
  plugins: [],
};
