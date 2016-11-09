require('babel-register')
require("babel-polyfill")

const config = require('./webpack/webpack.config.babel')
module.exports = config
