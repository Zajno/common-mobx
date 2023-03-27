module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: [ "./src" ],
    testMatch: [
        '**/__tests__/**/(*.)+(spec|test).+(ts|tsx)',
    ],
    transform: {
        '^.+\\.(t|j)s$': ['ts-jest', {
            useESM: true
          }],
    },
    extensionsToTreatAsEsm: [".ts"],
    collectCoverage: true,
    globalSetup: './global-test-setup.cjs',
    setupFilesAfterEnv: ["jest-extended/all"],
};