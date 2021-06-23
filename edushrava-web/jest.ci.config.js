module.exports = {
    roots: ['<rootDir>/src'],
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
        '<rootDir>/src/__mocks__/popper.js.js'
    ],
    testMatch: ['<rootDir>/src/**/*.test.js'],
    testResultsProcessor: 'jest-sonar-reporter',
    runTestsByPath: true,
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg|s?css)$': '<rootDir>/src/__mocks__/fileMock.js'
    },
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js']
}
