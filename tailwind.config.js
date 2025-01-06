/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        Rancho : ["Rancho", "cursive"],
        Railway: ["Raleway", 'serif'],
      },
      colors : {
        'primary' : '#F4181C',
      }
    },
  }
}