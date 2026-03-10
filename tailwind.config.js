/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          pearl: '#FDFBF7',
          charcoal: '#2C2B2B',
          black: '#1A1A1A',
          gold: '#C5A880',
          champagne: '#E8DCC4',
          emerald: '#11352A',
          midnight: '#0F172A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
