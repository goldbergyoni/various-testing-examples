module.exports = {
    verbose: true,
    testMatch: ["**/test/*.js", "!**/playground/**"],
    collectCoverage:true,
    coverageReporters: ["lcov"],
    "collectCoverageFrom": [
      "**/*.js",
      "!**/node_modules/**",
      "!**/test/**"
    ],
    forceExit:true,
    testEnvironment: 'node',
    notify:true,
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname'
    ]
  };