module.exports = {
  verbose: true,
  testMatch: ["**/test/*.js", "!**/playground/**"],
  collectCoverage: false,
  coverageReporters: ["lcov"],
  "collectCoverageFrom": [
    "**/*.js",
    "!**/node_modules/**",
    "!**/test/**"
  ],
  forceExit: true,
  testEnvironment: 'node',
  notify: true,
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-master',
    ["jest-watch-toggle-config", {
      "setting": "verbose"
    }],
    ["jest-watch-toggle-config", {
      "setting": "collectCoverage"
    }]
  ]
};