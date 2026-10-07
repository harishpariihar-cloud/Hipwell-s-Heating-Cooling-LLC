/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2f8',
          100: '#d5deec',
          200: '#aabdd8',
          300: '#7f9cc4',
          400: '#547bb0',
          500: '#3a5e94',
          600: '#2d4a76',
          700: '#1f3658',
          800: '#12233b',
          900: '#0a1a2f',
          950: '#060f1c',
        },
        ice: {
          50: '#eff9ff',
          100: '#def2ff',
          200: '#b6e7ff',
          300: '#75d3ff',
          400: '#2cbfff',
          500: '#06a5f0',
          600: '#0084cc',
          700: '#0069a5',
          800: '#055786',
          900: '#0b4970',
          950: '#072f4a',
        },
        warm: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
};
