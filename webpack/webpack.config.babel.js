import webpack from 'webpack'
import path from 'path'
import config from './config'

// ---------------------------------------------------------------------
// CONSTANTS

const LIBRARY_NAME = 'exampleLibrary'
const LIBRARY_FILENAME = 'index'

const DIST_FOLDER = path.join(__dirname, '..', 'dist')

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
      loader: 'babel-loader',
      exclude: /node_modules/,
    }]
  },

  // ---------------------------------------------------------------------
  // OUTPUT CONFIGURATION

  output: {
    library: LIBRARY_NAME,
    libraryTarget: 'umd',
    path: config.PRODUCTION_MODE ?
      path.join(DIST_FOLDER, 'umd-min') : path.join(DIST_FOLDER, 'umd'),
    filename: `${LIBRARY_FILENAME}.js`
  },

  // ---------------------------------------------------------------------
  // Webpack dependencies rules

  resolve: {
    // file extensions to be processed
    extensions: config.EXTENSIONS,

    // extra roots, other than `node_modules`, used to search for imported modules
    root: config.ROOTS,
  },

  // ---------------------------------------------------------------------
  // PLUGINS

  plugins: [
    // check if is required, shouldn't (taken from react-redux repo)
    { apply: function apply(compiler) {
      compiler.parser.plugin('expression global', function expressionGlobalPlugin() {
        this.state.module.addVariable(
          'global', `(function() { return this; }()) || Function('return this')()`
        )
        return false
      })
    } },

    // expose environment value to the code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),

    // ignore dev config
    new webpack.IgnorePlugin(/\.\/dev/, /\/config$/)
  ]
}

if (config.PRODUCTION_MODE) {
  // minify the code only in production mode
  module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
    },
    output: { comments: false },
    sourceMap: true
  })
  )
}
