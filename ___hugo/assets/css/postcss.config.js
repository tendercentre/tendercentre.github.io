const postcssImport = require('postcss-import');
const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    postcssImport({
      path: ['assets/css'],
    }),
    tailwind('./assets/css/tailwind.js'),
    purgecss({
      content: ['layouts/**/*.html'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html'],
        },
      ],
      fontFace: true,
      whitelist: ['class1', 'class2'],
    }),
    autoprefixer({
      grid: true,
      browsers: ['>1%'],
    }),
  ],
};
