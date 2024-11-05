/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        XL: '1.5rem',
        L: '1.25rem',
        M: '1rem',
        R: '0.875rem',
        S: '0.75rem',
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
      },
      lineHeight: {
        30: '1.875rem',
        25: '1.5625rem',
        24: '1.5rem',
        21: '1.3125rem',
        20: '1.25rem',
        14: '0.875rem',
        12: '0.75rem',
      },
      colors: {
        gray: {
          white: '#FFFFFF',
          50: '#F4FBFA',
          100: '#CDD6E4',
          200: '#90A2B7',
          300: '#768797',
          400: '#56687A',
          500: '#415058',
          black: '#1E272E',
        },
        yellow: {
          200: '#FFF3AD',
          500: '#FFE241',
        },
        green: {
          100: '#E5FBF3',
          300: '#9DE0CE',
          500: '#2D2085',
        },
        blue: {
          100: '#E2EDFF',
          300: '#BBB5FF',
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
