/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(253,188,70)"
      }
    }
  },
  darkMode: "class",
  plugins: []
};