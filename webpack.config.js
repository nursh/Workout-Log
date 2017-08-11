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
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      filename: 'vendor.bundle.js',
      minChunks: Infinity,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],

  devtool: 'source-map',

  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' },
    ],
  },

  devServer: {
    contentBase: PATHS.public,
    open: true,
    openPage: '',
    hot: true,
    stats: 'errors-only',
    inline: true,
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
      },
    },
  },
};
