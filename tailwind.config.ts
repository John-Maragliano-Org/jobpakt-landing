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
        brand: {
          orange: "#D4500A",
          "orange-light": "#E8692A",
          "orange-dark": "#B84408",
          "orange-50": "#FFF4ED",
          "orange-100": "#FFE6D5",
          "orange-200": "#FECAAB",
          "orange-900": "#4A1D02",
          gunmetal: "#1A1A1A",
          dark: "#0D0D0D",
          "gray-950": "#0A0A0A",
          "gray-900": "#141414",
          "gray-800": "#1E1E1E",
          "gray-700": "#2A2A2A",
          "gray-600": "#3A3A3A",
          "gray-500": "#6B6B6B",
          "gray-400": "#9CA3AF",
          "gray-300": "#D1D5DB",
          "gray-200": "#E5E7EB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 40px rgba(212, 80, 10, 0.15)" },
          "50%": { boxShadow: "0 0 80px rgba(212, 80, 10, 0.3)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
