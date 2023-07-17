/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: { 'max': '900px' },
      lg: { 'max': '1024px' },
      sm: { 'max': '450px' },
    },
    extend: {},
  },
  plugins: [],
  important: true
}

