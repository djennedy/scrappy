const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "sfu-red": "#D3001F",
      },
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
