/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff8c00', // Deep orange
          hover: '#e07b00',
          dark: '#c76d00',
        },
        background: {
          light: '#fdfdfd',
          dark: '#0a0a0a',
          card_light: '#ffffff',
          card_dark: '#1e1e1e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
