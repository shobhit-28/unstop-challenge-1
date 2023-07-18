/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxl: { 'min': '1215px' },
      xl: { 'max': '1215px' },
      lg: { 'max': '1024px' },
      md: { 'max': '900px' },
      sm: { 'max': '450px' },
      xs: { 'max': '340px' },
    },
    extend: {},
  },
  plugins: [],
  important: true
}

