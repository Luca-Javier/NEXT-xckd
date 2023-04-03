/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,html,ts,jsx,tsx}",
    "./pages/**/*.{js,html,ts,jsx,tsx}",
    "./components/**/*.{js,html,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,html,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
