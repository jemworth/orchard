const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader,'css-loader'] }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
  ],
  optimization: {
    minimize: true, // ensures minification
    minimizer: [
      `...`, // keep default JS minifier (Terser)
      new CssMinimizerPlugin() // minifies CSS
    ]
  }
});
