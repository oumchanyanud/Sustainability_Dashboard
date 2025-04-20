/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // Enables dark mode via class="dark"
    content: [
      './src/app/**/*.{ts,tsx}',       // All routes/pages
      './src/components/**/*.{ts,tsx}', // All components
      './src/lib/**/*.{ts,tsx}',        // (optional) utility functions
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#10b981',     // emerald-500
            light: '#6ee7b7',       // emerald-300
            dark: '#047857',        // emerald-700
          },
          cute: {
            bg: '#f0fdf4',          // soft green background
            accent: '#bbf7d0'       // soft mint accent
          }
        },
        borderRadius: {
          xl: '1rem',
          '2xl': '1.5rem',
        },
        fontFamily: {
          rounded: ['"Comic Neue"', 'cursive'], // เพิ่มความน่ารัก
        }
      },
    },
    plugins: [],
  }