module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    semi: 0,
    'comma-dangle': 0,
    quotes: 0,
    'valid-jsdoc': 2,
    'react/jsx-uses-react': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-wrap-multilines': 2,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'arrow-parens': 0,
    'no-prototype-builtins': 0,
    'react/jsx-filename-extension': 0,
    'import/no-named-as-default': 0,
    'react/no-unused-prop-types': 0,
    'import/imports-first': 0,
    'class-methods-use-this': 0, // to evaluate if disable or not

  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  }
}

