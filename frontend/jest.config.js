module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/frontend/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'jest-preset-angular',
  },
  collectCoverage: true,
  coverageReporters: ['lcov'],
  moduleFileExtensions: ['ts', 'js', 'html'],
  testTimeout: 10000,
  maxConcurrency: 1,
  maxWorkers: 1,
  coverageThreshold: {
    global: {
      statements: 47,
      branches: 17,
      functions: 32,
      lines: 43
    }
  }
};
