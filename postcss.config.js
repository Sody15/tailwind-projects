const tailwindcss = require("tailwindcss");
const postcssNesting = require("postcss-nesting");

module.exports = {
  plugins: {
    "postcss-preset-env": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
  },
};
