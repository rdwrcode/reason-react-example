const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    simple: './lib/js/src/simple/simpleRoot.js',
    logo: './lib/js/src/logo/logoRoot.js',
    todomvc: './lib/js/src/todomvc/app.js',
    interop: './src/interop/interopRoot.js',
  },
  output: {
    path: path.join(__dirname, "bundledOutputs"),
    filename: '[name].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({
      asset:"[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
};
