/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",

        primary: "hsl(var(--color-primary) / <alpha-value>)",
        "primary-soft": "hsl(var(--color-primary-soft) / <alpha-value>)",
        "primary-hover": "hsl(var(--color-primary-hover) / <alpha-value>)",

        text: "hsl(var(--color-text) / <alpha-value>)",
        "text-muted": "hsl(var(--color-text-muted) / <alpha-value>)",
      },

      boxShadow: {
        glow: "0 0 40px hsl(var(--color-glow) / 0.35)",
      },

      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, hsl(var(--color-primary) / 0.12), transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--color-primary) / 0.08), transparent 45%)",
      },

      borderRadius: {
        xl2: "18px",
        "2xl2": "28px",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
