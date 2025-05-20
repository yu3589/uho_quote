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
          yellow: '#fff7d2',
          red: '#c78686',
          blue: '#819bce',
          middle_blue: '#748dc0',
          purple: '#a291be',
          orange: '#d98d73',
          green: '#bfbb32',
          light_gray: '#f0eded',
          middle_gray: '#cecccc',
          dark_gray: '#6a6565',
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
