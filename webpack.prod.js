const path = require('path');
const webpack = require('webpack');


const PATHS = {
  app: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public'),
};

module.exports = {
  entry: {
    app: './App.jsx',
  },

  context: PATHS.app,

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),

  ],

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
    ],
  },

};
