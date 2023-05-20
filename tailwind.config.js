/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      extend: {},
      dropShadow: {
          sm: '2px 2px 1px rgba(0, 0, 0, 0.4)',
          DEFAULT: '3px 3px 3px rgba(0, 0, 0, 0.6)',
          md: '3px 3px 6px rgba(0, 0, 0, 1)'
      },
      boxShadow: {
          DEFAULT: '1px 1px 5px rgba(0, 0, 0, 0.6)'
      }
    },
  darkMode: 'class',
  plugins: [],
}

