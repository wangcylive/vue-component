process.env.NODE_ENV = 'production'

const path = require('path')
const webpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackBaseConf = require('./webpack.base.conf')

const outputPath = path.resolve(__dirname, '../dist')
const publicPath = ''

console.log(process.cwd(), __dirname)

module.exports = webpackMerge(webpackBaseConf, {
  mode: 'production',
  output: {
    path: outputPath,
    publicPath: publicPath,
    filename: './assets/js/[name].[chunkhash].js',
    chunkFilename: './assets/js/[name].[chunkhash].js',
    hashDigestLength: 8
  },
  plugins: [
    new CleanWebpackPlugin('dist', {
      root: path.resolve(__dirname, '..')
    })
  ]
})
