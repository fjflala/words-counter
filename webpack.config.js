/**
 * Dependencies
 */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    library: 'wordsCounter',
    libraryTarget: 'umd',
    filename: 'index.js',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['./dist'], {
      verbose: true
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        extractComments: true,
      })
    ],
  },
};
