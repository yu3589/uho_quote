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
      keyframes: {
        yuraYura: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        guragura: { 
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(-6deg)' },
          '20%': { transform: 'rotate(6deg)' },
          '30%': { transform: 'rotate(-6deg)' },
          '40%': { transform: 'rotate(6deg)' },
          '50%': { transform: 'rotate(-4deg)' },
          '60%': { transform: 'rotate(4deg)' },
          '70%': { transform: 'rotate(-2deg)' },
          '80%': { transform: 'rotate(2deg)' },
          '90%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'yura-yura': 'yuraYura 0.8s ease-in-out infinite',
        'guragura': 'guragura 1s ease-in-out',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
