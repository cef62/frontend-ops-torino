const path = require('path')

const EXEC_PATH = process.cwd()

const PRODUCTION_MODE = process.env.NODE_ENV === 'production'

module.exports = {
  EXEC_PATH,
  PRODUCTION_MODE,

  // root path used to resolve relative path in loaders
  CONTEXT: path.join(EXEC_PATH, 'src'),

  // webpack bundler entry points
  ENTRY: {
    js: './index.js',
  },

  // file extensions to be processed
  EXTENSIONS: ['', '.js'],

  // extra roots, other than `node_modules`, used to search for imported modules
  ROOTS: [],
}

