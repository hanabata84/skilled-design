/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#11193D',
        primaryGrey: '#6B6B6B',
        gradOrange: '#FF6D4B',
        gradPink: '#F43E8E',
        gradViolet: '#6C49ED'
      },
    },
  },
  plugins: [],
}
