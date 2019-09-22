module.exports = function (w) {
  return {
    files: [
      'src/**/*.+(ts|js)',
      '!src/**/*.test.+(ts|js)'
    ],

    tests: ['src/**/*.test.+(ts|js)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest',

    compilers: {
      '**/*.+(js|ts)': w.compilers.babel({
        babelrc: true
      })
    }

  }
}