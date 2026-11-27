/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#172b4d',
        muted: '#74839a',
        line: '#e7edf4',
        brand: { 50: '#eff8ff', 100: '#d9eeff', 500: '#3288d3', 600: '#2174bd', 700: '#195f9e' },
        teal: { 50: '#eafaf6', 500: '#19a987', 600: '#148d70' },
      },
      boxShadow: { card: '0 8px 30px rgba(27, 54, 93, 0.055)' },
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
