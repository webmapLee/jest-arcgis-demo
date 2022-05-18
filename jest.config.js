export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
      '^.*\\.(tsx?|js)$': 'ts-jest',
    },
    testMatch:["**/tests-demos/**/*.(spec|test).[jt]s?(x)"],
    transformIgnorePatterns: ['node_modules/(?!(@arcgis)/)'],
    moduleFileExtensions: ['js', 'ts', ],
    extensionsToTreatAsEsm: ['.ts', '.vue'],
    setupFiles: ['./jest.setup.js'],
    coverageProvider: "v8",
    coverageThreshold:{
      global:{
        "branches": 50,
        "functions": 50,
        "lines": 50,
        "statements": 50
      }
    }
  };