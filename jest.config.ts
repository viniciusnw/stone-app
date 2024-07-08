import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: "jest-expo",
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    setupFilesAfterEnv: ['./setup-tests.js'],
};

export default config;