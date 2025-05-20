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
          red: '#b36f6f',
          blue: '#5a78b5',
          middle_blue: '#748dc0',
          blue: '#5a78b5',
          purple: '#9988B7',
          orange: '#d59574',
          green: '#bfbb32',
          light_gray: '#f0eded',
          middle_gray: '#cecccc',
          dark_gray: '#6a6565',
          white: '#faf8f8',
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
