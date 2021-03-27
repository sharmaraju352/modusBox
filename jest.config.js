module.exports = {
  testEnvironment: 'node',
  testRegex: '\\.(spec|test)\\.js?$',
  moduleFileExtensions: ['js'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.config.js'],
  clearMocks: true,
  forceExit: true,
  collectCoverageFrom: ['src/**/*.js', '!src/app.js'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: ['default', '<rootDir>/tools/coverage-total-reporter.js'],
  coverageThreshold: {
    './src/': {
      branches: 70,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  globals: {
    __JEST__: true,
  },
};
