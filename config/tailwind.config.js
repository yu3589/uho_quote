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
          yellow: '#fef8dc',
          dark_yellow: '#ebc11d',
          dark_yellow_hover: '#ebb305',
          red: '#ffa9a9',
          red_hover: '#f59797',
          blue: '#98b7f9',
          blue_hover: '#88aaf2',
          dark_blue: '#6f98ef',
          dark_blue_hover: '#5286f5',
          purple: '#c2a6ff',
          purple_hover: '#b295f0',
          orange: '#f7ae57',
          orange_hover: '#f29d62',
          light_gray: '#f0eded',
          middle_gray: '#cecccc',
          dark_gray: '#747272',
          white: '#f9f9f9',
        },
      },
      keyframes: {
        yurayura: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(0deg)' },
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'yurayura': 'yurayura 0.8s ease-in-out infinite',
        'guragura': 'guragura 1s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
