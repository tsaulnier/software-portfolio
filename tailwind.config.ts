import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-ibm)", "monospace"],
      },

      colors: {
        ui: {
          bg: "rgb(var(--ui-bg) / <alpha-value>)",
          surface: "rgb(var(--ui-surface) / <alpha-value>)",
          text: "rgb(var(--ui-text) / <alpha-value>)",
          muted: "rgb(var(--ui-muted) / <alpha-value>)",
          border: "rgb(var(--ui-border) / <alpha-value>)",
        },
      },
    },
  },

  plugins: [],
};

export default config;
