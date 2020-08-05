/* eslint-disable linebreak-style */
module.exports = {
  verbose: true,
  testMatch: ['**/test/*.js', '**/*test*.js', '!**/*ignore*', '!**/*helpers*.js'],
  collectCoverage: false,
  setupFilesAfterEnv: ['jest-expect-message'],
  globalSetup: './lesson-price-calculator/global-setup.js',
  globalTeardown: './lesson-price-calculator/global-teardown.js',
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
  notify: false,
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