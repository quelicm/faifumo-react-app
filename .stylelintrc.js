module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-concentric-order',
    './node_modules/prettier-stylelint/config.js'
  ],
  rules: {
    'color-no-invalid-hex': true,
    'no-invalid-double-slash-comments': null,
    'property-no-unknown': [ true, {
      ignoreProperties: [
        '/\/\//',
      ]
    }],

  }
};
