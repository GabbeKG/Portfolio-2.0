/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    screens: {
      'xxs': { 'max': '450px' }, // custom for very small screens
      'sm': '640px',             // default small breakpoint (640px and up)
      'md': '768px',             // medium breakpoint (768px and up)
      'lg': '1024px',            // large breakpoint (1024px and up)
      'xl': '1280px',            // extra large breakpoint (1280px and up)
    },
  },
  plugins: [],
}
