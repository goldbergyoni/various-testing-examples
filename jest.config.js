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
    "jest-watch-suspend",
    // configure
    [
      "jest-watch-suspend", {
        // override key press
        "key": "z",
        // override prompt
        "prompt": "suspend watch mode",
        // starts in suspend mode
        "suspend-on-start": true
      }
    ],
    ["jest-watch-toggle-config", {
      "setting": "verbose"
    }],
    ["jest-watch-toggle-config", {
      "setting": "collectCoverage"
    }]
  ]
};