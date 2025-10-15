/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
export default {
  mutate: ['src/**/*.js'],
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    configFile: 'package.json'
  },
  reporters: ['progress', 'clear-text', 'html'],
  coverageAnalysis: 'perTest'
};