const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/views/**/*.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js'
    // './public/*.{html,erb}',
    // './app/helpers/**/*.rb',
    // './app/javascript/**/*.js',
    // './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Zen Antique"', 'serif'],
      },
      colors: {
        uho: {
          yellow: '#fff7d2',
          dark_yellow: '#e8b928',
          dark_yellow_hover: '#df9026',
          red: '#f5a3a3',
          red_hover: '#df7878',
          blue: '#8eabe8',
          blue_hover: '#7c9ad8',
          dark_blue: '#7295df',
          dark_blue_hover: '#7276df',
          purple: '#c0aaf1',
          purple_hover: '#a48adf',
          orange: '#efa36f',
          orange_hover: '#e89257',
          light_gray: '#f0eded',
          middle_gray: '#cecccc',
          dark_gray: '#747272',
          white: '#f9f9f9',
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
