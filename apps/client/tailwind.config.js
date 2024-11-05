/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          white: '#FFFFFF',
          50: '#F4FBFA',
          100: '#CDD9E4',
          200: '#90A2B7',
          300: '#768797',
          400: '#56687A',
          500: '#41505B',
          black: '#1E272E',
        },
        yellow: {
          200: '#FFF3AD',
          500: '#FFE241',
        },
        green: {
          100: '#E5FBF3',
          300: '#9DECCE',
          500: '#02D085',
        },
        blue: {
          100: '#E2EDFF',
          300: '#8BB5FF',
          500: '#3E84FF',
        },
        red: {
          500: '#FF5151',
        },
      },
    },
  },
  plugins: [],
};
