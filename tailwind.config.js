/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Braun Linear Regular", "sans"],
        "linear-medium": ["Braun Linear Medium", "sans"],
      },
      colors: {
        mirage: {
          50: "#f0f7fe",
          100: "#deecfb",
          200: "#c4e0f9",
          300: "#9cccf4",
          400: "#6dafed",
          500: "#4b90e6",
          600: "#3674da",
          700: "#2d60c8",
          800: "#2a4fa3",
          900: "#274481",
          950: "#0f172a",
        },
      },
    },
  },
  plugins: [],
};
