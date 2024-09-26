const config = {
  rootDir: './build',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'node_modules'
  ],
  coverageProvider: 'v8',
  coverageDirectory: '<rootDir>/../coverage',
  collectCoverageFrom: [
    '<rootDir>/src/*.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/*.spec.js',
    '<rootDir>/tests/'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
}

export default config
