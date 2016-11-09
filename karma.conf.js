require('babel-register')

module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-mocha
      // Set framework to mocha
      'mocha',

      // Reference: http://chaijs.com/api/bdd/
      // Use chai assertions
      'chai',

      // Reference: http://sinonjs.org/
      // use sinon spies
      'sinon',
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'spec',

      // https://www.npmjs.com/package/karma-notify-reporter
      'notify',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Reference: https://www.npmjs.com/package/phantomjs-polyfill
      // Needed because phantomjs does not support `function.bind()`
      'node_modules/phantomjs-polyfill/bind-polyfill.js',

      'node_modules/babel-polyfill/browser.js',

      // Grab all files in the tests directory that contain _test.
      'tests/**/*.spec.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'tests/**/*.js*': ['webpack', 'sourcemap']
    },

    browsers: [
      // Run tests using PhantomJS
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      // type: 'html',
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ],
    },

    // Test webpack config
    webpack: require('./webpack/webpack.config.test.babel'), // eslint-disable-line

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: true
    },

    // configure notify reporter
    notifyReporter: {
      reportEachFailure: false, // Default: false, Will notify on every failed sepc
      reportSuccess: true, // Default: true, Will notify when a suite was successful
    },

    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test
      suppressErrorSummary: true,  // do not print error summary
      suppressFailed: false,  // do not print information about failed tests
      suppressPassed: true,  // do not print information about passed tests
      suppressSkipped: true,  // do not print information about skipped tests
      showSpecTiming: true, // print the time elapsed for each spec
    },
  });
};
