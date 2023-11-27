module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [],
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  testEnvironment: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
