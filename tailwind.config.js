/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { 'max': '450px' },
      md: { 'max': '900px' },
      lg: { 'max': '1024px' }
    },
    extend: {},
  },
  plugins: [],
  important: true
}

