/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883',
        },
        ftLightGreen: '#81c784',
        ftLiveOrange: '#ffb74d',

      },
      fontFamily: {
        body: ['Nunito']
      },
    },
  },
  plugins: [],
}

