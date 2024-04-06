import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "12": "12px",
      },
      colors: {
        primary: "#01010C",
        secondary: "#9BF381",
        asphalt: "#455560",
        cloud: "#F2F5F8",
        silver: "#D9DCE1",
        success: "#17BF8D",
      },
      screens: {
        xl: "1280px",
        "2xl": "1536px",
      },
      fontFamily: {
        normal: ["var(--font-pingAR)"],
        bold: ["var(--font-bold)"],
        medium: ["var(--font-medium)"],
        extrabold: ["var(--font-extrabold)"],
      },
      fontSize: {
        large: "20px",
        medium: "16px",
        small: "14px",
        extrasmall: "10px",
      },
    },
  },
  plugins: [],
};
export default config;
