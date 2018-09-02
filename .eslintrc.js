module.exports = {
  "extends": ["airbnb", "react-app" ],
  "rules": {
    // React rules
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-curly-spacing": [2, "always"],
    // Permit assign dinyamic type for button componnet
    // https://github.com/yannickcr/eslint-plugin-react/issues/1555
    "react/button-has-type": [true, {
      "button": true,
      "submit": true,
      "reset": true,
    }],
    "react/require-default-props": [false],
    // Need for "react-app" to allow use the last eslint-plugin-jsx-a11y version
    // https://github.com/facebook/create-react-app/issues/2631
    "jsx-a11y/href-no-hash": [false],
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }]
  },
  "env": {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
};
