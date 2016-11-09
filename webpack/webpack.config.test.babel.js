import config from './config'

// ---------------------------------------------------------------------
// Webpack configuration object

module.exports = {
  // keep source complete maps, slower but with better results
  devtool: 'source-map',

  // root path used to resolve relative path in loaders
  context: config.CONTEXT,

  // webpack bundler entry points
  entry: config.ENTRY,

  // ---------------------------------------------------------------------
  // LOADERS

  module: {

    loaders: [{
      // Babel loader, manage es2015 and JSX
      test: /\.js$/,
      loader: 'babel-loader?cacheDirectory',
      exclude: /node_modules/,
    }]
  },

  // ---------------------------------------------------------------------
  // Webpack dependencies rules

  resolve: {
    // file extensions to be processed
    extensions: config.EXTENSIONS,

    // extra roots, other than `node_modules`, used to search for imported modules
    root: config.ROOTS,
  }
}
