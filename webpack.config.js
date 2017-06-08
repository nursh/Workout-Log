const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: './src/App.jsx',

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'source-map',

  modules: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
    ],
  },
};
