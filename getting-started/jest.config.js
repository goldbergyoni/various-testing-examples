/* eslint-disable linebreak-style */
module.exports = {
  verbose: true,
  testMatch: ['**/*test*.js', '!**/playground/**', '!**/stryker-tmp/**', '!**/test-helpers.js**', '!**/*demo*', '!**/*price-calculator.test.final.js*'],
  collectCoverage: false,
  setupFilesAfterEnv: ['jest-expect-message'],
  globalSetup: './hello-testing/global-setup.js',
  globalTeardown: './hello-testing/global-teardown.js',
  reporters: [
    'default'
  ],
  coverageReporters: ['text-summary'],
  collectCoverageFrom: [
    '**/src/*.js',
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