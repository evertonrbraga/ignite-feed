module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.js",
    "src/**/*.jsx",
    "!src/**/*.stories.{js,jsx,ts,tsx}",
    "!src/stories/*.{js,jsx,ts,tsx}",
  ],
  coverageReporters: ["lcov", "text", "html"],
  coveragePathIgnorePatterns: ["/node_modules/", "src/main.jsx"],
};
