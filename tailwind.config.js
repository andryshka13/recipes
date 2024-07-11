/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '425px',
        // => @media (min-width: 425px) { ... }
      },
      colors: {
        'olive': '#99AA5D',
        'cream-white': '#DDBEA9'

      }
    },
  },
  mode: "jit",
  plugins: [],
}

