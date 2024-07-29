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
        "teva-teal": "#3C7E79",
        "teva-blue": "#00567A",
        "body-text": "#424242",
      },
    },
  },
  plugins: [],
};
export default config;
