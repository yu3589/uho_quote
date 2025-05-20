const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.{html,erb}',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Zen Antique"', 'serif'],
      },
      colors: {
        uho: {
          yellow: '#f8f0cb',
          light_red: '#b36f6f',
          red: '#a25d5d',
          light_blue: '#5a78b5',
          middle_blue: '#748dc0',
          blue: '#5a78b5',
          light_purple: '#9988B7',
          purple: '#8975AE',
          light_orange: '#d59574',
          orange: '#b57a5b',
          green: '#bfbb32',
          light_gray: '#f0eded',
          middle_gray: '#cecccc',
          dark_gray: '#545454',
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
