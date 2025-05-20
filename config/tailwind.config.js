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
          red: '#e58e8e',
          blue: '#96b6f7',
          purple: '#b0ade9',
          orange: '#f0b07c',
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
