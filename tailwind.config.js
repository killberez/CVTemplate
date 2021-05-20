const { green, orange, gray, yourCustomPalette } = require('./themes.js');

require('./generatePDF');

module.exports = {
  purge: {
    content: ['./public/*.html'],
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik'],
      },

      ...green,
      // ...gray,
      // ...orange,
      // ...yourCustomPalette
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
