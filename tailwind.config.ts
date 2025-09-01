
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{mdx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#3b82f6",
        ink: "#111827",
        base: "#ffffff",
        subtle: "#f7fafc"
      },
      boxShadow: {
        'glass': "0 8px 32px rgba(31, 38, 135, 0.1)"
      },
      backdropBlur: {
        xs: "2px"
      },
      borderRadius: {
        '2xl': "1rem"
      }
    },
  },
  plugins: [],
};
export default config;
