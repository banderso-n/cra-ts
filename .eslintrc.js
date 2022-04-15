module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    './node_modules/nerdery-javascript-standards/packages/eslint-config-nerdery-base/.eslintrc.js',
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
  },
};
