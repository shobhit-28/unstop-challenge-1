/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      lg: { 'max': '1024px' },
      md: { 'max': '900px' },
      sm: { 'max': '450px' },
    },
    extend: {},
  },
  plugins: [],
  important: true
}

