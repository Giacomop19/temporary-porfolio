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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        regular : ['var(--font-inter-regular)'],
        bold : ['var(--font-inter-bold)'],
        dune : ['var(--font-dune)'],
        black : ['var(--font-inter-black)']
      }
    },
  },
  plugins: [],
};
export default config;
