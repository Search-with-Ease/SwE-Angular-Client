/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          50: "#EFECFE",
          100: "#E2DDFD",
          200: "#C6BBFC",
          300: "#A999FA",
          400: "#8C77F9",
          500: "#7054F7",
          600: "#3A15F4",
          700: "#2709BE",
          800: "#1A067F",
          900: "#0D033F",
          950: "#06011D"
        }
      }
    },
  },
  plugins: [],
}

