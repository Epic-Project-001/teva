import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";
const teva_teal = "#3C7E79";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "teva-teal": teva_teal,
        "teva-blue": "#00567A",
        "teva-green": "#AFCB37",
        "body-text": "#424242",
      },
    },
  },
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              "500": teva_teal,
              DEFAULT: teva_teal,
            },
          },
        },
      },
    }),
  ],
};
export default config;
