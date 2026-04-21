/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: '#8b5cf6',
        },
        pink: {
          500: '#ec4899',
        },
        orange: {
          500: '#f97316',
        },
      }
    },
  },
  plugins: [],
}
