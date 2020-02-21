module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.module.ts',
    '!<rootDir>/src/enums/*',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['lcov', 'text-summary'],

  preset: 'ts-jest',

  testEnvironment: 'node',

  testPathIgnorePatterns: [
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/e2e/',
    '<rootDir>/node_modules/',
    '<rootDir>/src/app/*.(js|scss)',
  ],
};
