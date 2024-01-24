/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          'dark-blue': 'rgb(var(--dark-blue) / <alpha-value>)',
          teal: 'rgb(var(--teal) / <alpha-value>)',
          'columbia-blue': 'rgb(var(--columbia-blue) / <alpha-value>)',
          lavender: 'rgb(var(--lavender) / <alpha-value>)'
        }
      }
    }
  },
  plugins: []
}
