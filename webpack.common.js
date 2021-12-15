/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', options: { url: false },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /font-awesome\.config\.js/,
        use: [{ loader: 'style-loader' }, { loader: 'font-awesome-loader' }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: path.resolve(__dirname, 'src/public/images/favicon.jpg'),
    }),
    new WebpackPwaManifest({
      name: 'Foodwar Restaurants Catalogue',
      short_name: 'Foodwar',
      description: 'Platform to show best restaurant in the world',
      theme_color: '#F7C531',
      background_color: '#ffffff',
      start_url: '/index.html',
      crossorigin: 'use-credentials',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/images/logo-foodwar.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable',
          ios: true,
        },
        {
          src: path.resolve(__dirname, 'src/public/images/logo-foodwar.png'),
          sizes: '144x144',
          purpose: 'any',
        },
      ],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/sw.js'),
    }),
  ],
};
