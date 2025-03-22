/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths according to your project structure
  ],
  theme: {
    extend: {
      height: {
        '1/2-screen': '50vh',
      },
    },
  },
  plugins: [],
}; 