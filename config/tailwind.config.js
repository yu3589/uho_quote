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
          dark_yellow: '#ebb305',
          red: '#f5a3a3',
          blue: '#7fa0e8',
          dark_blue: '#7295df',
          purple: '#baa2f0',
          orange: '#f1a36d',
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
