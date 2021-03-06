const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const sourcePath = path.join(__dirname, 'src')

require('babel-polyfill')
require('whatwg-fetch')

module.exports = {
  entry: [
    'babel-polyfill',
    'whatwg-fetch',
    path.resolve(sourcePath,  'app.js')
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      sourcePath,
      path.resolve(__dirname, 'node_modules')
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: sourcePath
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin(),
    new webpack.HashedModuleIdsPlugin()
  ]
}
