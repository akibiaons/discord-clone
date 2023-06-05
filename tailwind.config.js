const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // class, 'media' or boolean are the methods that can be used..
  theme: {
    extend: {
      colors: {
        primary: "#202225",
        secondary: "#ffffff",
        gray: colors.neutral,
        gray: {
          900: "#202225",
          800: "#2f3136",
          700: "#36393f",
          600: "#4f545c",
          400: "#d4d7dc",
          300: "#e3e5e8",
          200: "#ebedef",
          100: "#f2f3f5",
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
};
