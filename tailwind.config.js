/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },

      colors: {
        primary: "#3E3E3C",
        secondary: "#7A3838",
        tertiary: "#FFEBB5",
      },
    },
  },
  plugins: [],
};
