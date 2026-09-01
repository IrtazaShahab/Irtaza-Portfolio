import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        "bg-2": "#101018",
        "bg-3": "#161622",
        line: "rgba(167,139,250,0.14)",
        "line-strong": "rgba(167,139,250,0.3)",
        accent: "#8b5cf6",
        "accent-soft": "#a78bfa",
        "accent-dim": "#6d4bd6",
        ink: "#eceaf6",
        dim: "#9a97b3",
        faint: "#6b6887",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Helvetica", "sans-serif"],
        mono: ["ui-monospace", "SF Mono", "Cascadia Code", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(139,92,246,0.35)",
        "card-hover": "0 8px 40px rgba(139,92,246,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
