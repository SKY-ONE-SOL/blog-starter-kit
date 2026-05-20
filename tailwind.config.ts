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
        sky: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bcd9ff",
          300: "#8ebeff",
          400: "#5998ff",
          500: "#3374ff",
          600: "#1a52f5",
          700: "#1340e1",
          800: "#1635b6",
          900: "#18318f",
          950: "#121f57",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(18, 31, 87, 0.08)",
        "card-hover": "0 12px 40px rgba(18, 31, 87, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
