/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0F766E',
        secondary: '#F0FDF4',
        accent: '#DCFCE7',
        'text-primary': '#1F2937',
        background: '#F0FDF4',
      },
    },
  },
  plugins: [],
};