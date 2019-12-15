module.exports = {
  verbose: true,
  testMatch: ["**/mutation.test.js", "!**/playground/**"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text-summary"],
  "collectCoverageFrom": [
    "**/order-service.js",
    "!**/node_modules/**"
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
//npm test -- --config=jest.config.mutation.js --watch