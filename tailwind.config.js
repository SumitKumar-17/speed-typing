/** @type {import('tailwindcss').Config} */
const colors=require("tailwindcss/colors");


module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:colors.yellow
      }
    },
  },
  plugins: [],
}

