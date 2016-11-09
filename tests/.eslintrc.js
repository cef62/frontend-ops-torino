module.exports = {
  env: {
    browser: true,
    mocha: true,
    jasmine: true,
    node: true
  },
  globals: {
    jest: false,
    expect: true,
    sinon: true
  },
  rules: {
    'no-unused-expressions': 0,
    'react/no-multi-comp': 0,
    'react/prefer-stateless-function': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'react/no-did-mount-set-state': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'react/prefer-es6-class': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'no-plusplus': 0,
    'import/no-extraneous-dependencies': 0, // used to allow import of enzyme in tests
    'react/forbid-prop-types': 0,
    'object-property-newline': 0,
  }
}
