/* eslint-disable */
module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('postcss-strip-inline-comments'),
    require('stylelint'),
    require('postcss-preset-env')({
      stage: 2,
      features: {
        'nesting-rules': true,
        'custom-selectors': true,
      },
    }),
  ],
};
