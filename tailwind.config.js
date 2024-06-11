/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {

        'xxs': '361px', // Özel ekran genişliği için 'xs' adında bir tanım, 400 piksel genişlik
        'xfts': '389px', // Özel ekran genişliği için 'xs' adında bir tanım, 400 piksel genişlik
        'xs': '400px', // Özel ekran genişliği için 'xs' adında bir tanım, 400 piksel genişlik
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
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

