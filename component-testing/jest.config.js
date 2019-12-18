module.exports = {
  verbose: true,
  testMatch: ['**/test/*.js', '!**/playground/**', '!**/stryker-tmp/**'],
  collectCoverage: false,
  // reporters: [
  //   ["jest-silent-reporter", {
  //     "useDots": false
  //   }]
  // ],
  coverageReporters: ['text-summary'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/test/**',
  ],
  forceExit: true,
  testEnvironment: 'node',
  notify: true,
  notifyMode: 'change',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-master',
    ['jest-watch-toggle-config', {
      setting: 'verbose',
    }],
    ['jest-watch-toggle-config', {
      setting: 'collectCoverage',
    }],
  ],
};
