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
          middle_yellow: '#e6b422',
          dark_yellow: '#e7c535',
          red: '#ef9b9b',
          blue: '#95afe5',
          dark_blue: '#748dc0',
          purple: '#bba7e0',
          orange: '#e79c75',
          light_gray: '#f4f4f0',
          middle_gray: '#e9e9e4',
          dark_gray: '#747272',
          white: '#f9f9f9',
          green: '#bfbb32',
          brown: '#504949',
          dark_brown: '#332e2e',
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
      screens: {
        'ipad': {'max': '1024px'},
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/container-queries'),
  ]
}
