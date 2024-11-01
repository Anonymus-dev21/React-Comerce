/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          900: 'rgb(76,61,61)', // Marrón oscuro
          800: 'rgb(75,61,61)', // Marrón cacao
          700: '#8b5e3c', // Marrón madera
          600: '#a97142', // Marrón bronce
          500: '#b58955', // Marrón medio
          400: '#c69b6d', // Marrón arena
          300: 'rgb(210,180,140)', // Marrón claro
          200: '#e2c3a3', // Beige
          100: '#f0e1d4',
        }
      },
      screens: {
        'max-xxsm': {
          'max': '400px'
        },
        'max-330': {
          'max': '330px'
        },
        'max-500': {
          'max': '500px'
        },
        'max-600': {
          'max': '600px'
        },
        'max-sm': {
          'max': '640px'
        }, // max-width: 640px
        'max-md': {
          'max': '768px'
        }, // max-width: 768px
        'max-800': {
          'max': '800px'
        },
        'max-995': {
          'max': '995px'
        },
        'max-lg': {
          'max': '1024px'
        }, // max-width: 1024px
        'max-xl': {
          'max': '1100px'
        }, // max-width: 1280px
        'max-xsm': {
          'max': '500px'
        },
        'max-intermedio': {
          'max': '800px'
        },
        'min-intermedio': {
          'min': '800px'
        }
      }
    },
  },
  plugins: [],
}