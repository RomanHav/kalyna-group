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
        "custom-blue": "#11998E",
        "custom-green": "#38EF7D",
        "custom-background": "#1b3431",
        "custom-running-first": "#A1FFCE",
        "custom-running-second": "#FAFFD1",
      },
      backgroundImage: {
        texture: "url('/background.png')",
      },
    },
  },
  plugins: [],
};
export default config;
