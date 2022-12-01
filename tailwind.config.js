/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#121F97',
        secondary: '#211C61',
        accent: '#848AC6',
        gray: '#F5F5F5',
        darkgray: '#212121',
      }
    },
  },
  plugins: [],
}
