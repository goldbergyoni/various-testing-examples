module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  plugins: ['jest', 'mocha'],
  extends: [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'jest/no-if': 'error',
    'jest/require-top-level-describe': 'error',
    "mocha/valid-test-description": ['error', "When.*?then.*?$", ["test"], "A test name must conform to the standard pattern of 'When {scenario}, then {expectation}"]
  },
};