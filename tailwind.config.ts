import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero:"url('/icons/Background.svg')",
        service:"url('/images/background-2.jpeg')"
      },
      colors:{
        primary:{
          1:"#fff",
          2:"#0066A4"
        }
      },
      screens:{
        xs:{max:"450px"},
        img:{max:"900px"}
      }
    },
  },
  plugins: [],
};
export default config;