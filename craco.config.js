module.exports = {
  babel: {
    plugins: ['babel-plugin-styled-components'],
  },
  jest: {
    configure: (jestConfig) => ({
      ...jestConfig,
      roots: ['<rootDir>/src'],
      preset: 'ts-jest',
      transform: {
        /* Forced ts-jest to typescript files */
        '^.+\\.tsx$': 'ts-jest',
        ...jestConfig.transform,
      },
    }),
  },
}
