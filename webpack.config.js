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
};
