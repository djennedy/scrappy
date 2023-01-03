/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["16px", "19px"],
      sm: ["18px", "22px"],
      base: ["20px", "25px"],
    },
    extend: {},
  },
  plugins: [],
};
