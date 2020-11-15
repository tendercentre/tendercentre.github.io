const defaultConfig = require('tailwindcss/defaultConfig');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: 'all',
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#faf8f1',
          100: '#f9f4dc',
          200: '#f4e8ad',
          300: '#edd56e',
          400: '#e1b430',
          500: '#d49014',
          600: '#b96b0c',
          700: '#915010',
          800: '#6f3e16',
          900: '#573216',
        },
        blue: {
          50: '#f6fafb',
          100: '#ebf7f8',
          200: '#d2ebf0',
          300: '#afd9e7',
          400: '#73b9d9',
          500: '#3f93c5',
          600: '#2d6ea6',
          700: '#295682',
          800: '#23425f',
          900: '#1d354a',
        },
      },
      fontFamily: {
        display: ['Oswald', ...defaultConfig.theme.fontFamily.sans],
        sans: ['Roboto', ...defaultConfig.theme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [
    // https://github.com/tailwindlabs/tailwindcss-aspect-ratio#readme
    aspectRatio,
    // https://github.com/tailwindlabs/tailwindcss-typography#readme
    typography,
    // https://github.com/tailwindlabs/tailwindcss-forms#readme
    forms,
  ],
};
