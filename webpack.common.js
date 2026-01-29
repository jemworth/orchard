const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { app: './src/app.js' },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/orchard/',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['app'],
      title: 'Orchard Test - Home',
      meta: {
        description: 'Orchard Test - Home',
        keywords: 'cards, gallery, lightbox, accessibility',
        author: 'Jem Galicia',
        canonical: 'https://jemworth.github.io/orchard/',
        ogTitle: 'Orchard Test - Home',
        ogDescription: 'Orchard Test - Home',
        ogImage: '',
        twitterTitle: 'Orchard Test - Home',
        twitterDescription: 'Orchard Test - Home',
        twitterImage: ''
      }
    })
  ],
  module: {
    rules: [
      { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|webp)$/i, type: 'asset/resource', generator: { filename: 'images/[name][ext]' } },
      { test: /\.json$/i, type: 'json' }
    ]
  }
};
