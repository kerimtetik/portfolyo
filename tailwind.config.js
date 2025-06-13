/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@fortawesome/fontawesome-free/**/*.{js,css}",
  ],
  darkMode: "class", // ← Bu satır önemli
  theme: {
    extend: {},
  },
  plugins: [],
}
