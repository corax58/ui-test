import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          900: "#202442",
          800: "#25294A",
          700: "#282C50",
          600: "#2D325A",
          500: "#737AAE",
          400: "#394076",
        },
      },
    },
  },
  plugins: [],
};
export default config;
