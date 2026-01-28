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
      title: 'Tasteology - Home',
      meta: {
        description: 'Tasteology - Home',
        keywords: 'cards, gallery, lightbox, accessibility',
        author: 'Jem Galicia',
        canonical: 'https://tasteology.com',
        ogTitle: 'Tasteology - Home',
        ogDescription: 'Tasteology - Home',
        ogImage: '',
        twitterTitle: 'Tasteology - Home',
        twitterDescription: 'Tasteology - Home',
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
