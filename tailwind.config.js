/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './layout/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
      './templates/customers/*.liquid',
      './templates/*.liquid'
    ],
    theme: {
      extend: {
        keyframes: {
          'fade-in-left': {
              '0%': {
                  opacity: '0',
                  transform: 'translateX(-20px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateX(0)'
              },
          }
      },
      animation: {
          'fade-in-left': 'fade-in-left 1s ease-out',
      }
      },
    },
    plugins: [],
  }