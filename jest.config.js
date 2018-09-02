module.exports = {
  verbose: true,
  testMatch: [
    '**/__tests__/**/*.js?(x)',
  ],
  // Support import css&files in Components https://github.com/facebook/jest/issues/3094
  // https://facebook.github.io/jest/docs/en/webpack.html
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
};
