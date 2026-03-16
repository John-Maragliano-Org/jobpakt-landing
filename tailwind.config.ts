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
          gunmetal: "#1A1A1A",
          dark: "#111111",
          "gray-900": "#1E1E1E",
          "gray-800": "#2A2A2A",
          "gray-700": "#333333",
          "gray-400": "#9CA3AF",
          "gray-300": "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
