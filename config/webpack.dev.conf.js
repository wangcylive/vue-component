const path = require('path')
const webpackMerge = require('webpack-merge')

const webpackBaseConf = require('./webpack.base.conf')

module.exports = webpackMerge(webpackBaseConf, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../src'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].js'
  }
})
