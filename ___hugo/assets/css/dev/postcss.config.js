const postcssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssImport({
      path: ['assets/css'],
    }),
    tailwind('./assets/css/tailwind.js'),
    autoprefixer({
      browsers: ['>1%'],
    }),
  ],
};
