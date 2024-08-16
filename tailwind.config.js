const { fontFamily } = require("tailwindcss/defaultTheme");
import {nextui} from "@nextui-org/react";


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({themes: {
    "dark": {
      extend: "dark",
      colors: {
        background: "#202124",
      }
    },
  }})],
};
