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
          dark_yellow: '#ecc736',
          red: '#f5a3a3',
          blue: '#90aeec',
          purple: '#baa2f0',
          orange: '#eea777',
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
