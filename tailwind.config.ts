import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F100F",
        surface: {
          DEFAULT: "#171816",
          card: "#151614",
          hover: "#20221E",
          subtle: "#1C1D1B",
        },
        cream: {
          DEFAULT: "#F4EFEA",
          pure: "#FAF8F5",
          muted: "#9E9A92",
          dim: "#6B6760",
        },
        accent: {
          purple: "#9A87AC",
          "purple-dim": "rgba(154, 135, 172, 0.15)",
          green: "#5B705F",
          "green-dim": "rgba(91, 112, 95, 0.15)",
        },
        border: {
          subtle: "rgba(244, 239, 234, 0.06)",
          light: "rgba(244, 239, 234, 0.12)",
          active: "rgba(244, 239, 234, 0.24)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        normal: "0em",
        wide: "0.04em",
        wider: "0.08em",
        widest: "0.15em",
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
