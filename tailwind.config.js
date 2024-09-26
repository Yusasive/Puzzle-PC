/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Satoshi': ['Satoshi', 'sans-serif'],
        'DM_Sans': ['DM_Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

