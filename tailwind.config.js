/** @type {import('tailwindcss').Config} */
export default {
  // This line tells Tailwind to look INSIDE src for your code
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}