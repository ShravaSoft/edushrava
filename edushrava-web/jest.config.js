module.exports = {
    projects: [
        {
            displayName: 'test',
            roots: ['<rootDir>/src'],
            setupFilesAfterEnv: [
                '@testing-library/jest-dom/extend-expect',
                '<rootDir>/src/__mocks__/popper.js.js'
            ],
            testMatch: ['<rootDir>/src/**/*.test.js'],
            moduleNameMapper: {
                '\\.(jpg|jpeg|png|gif|svg|s?css)$': '<rootDir>/src/__mocks__/fileMock.js'
            },
            runTestsByPath: true
        },
        {
            displayName: 'lint',
            rootDir: '<rootDir>/src',
            runner: 'jest-runner-eslint',
            testMatch: ['<rootDir>/**/*.test']
        }
    ]
}