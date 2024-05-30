const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/source.min.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'vendor.min.js'
  },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ],
            exclude: /\.module\.css$/
          },
          {
            test: /\.scss$/,
            use: [
              'style-loader',
              'css-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.css$/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 1,
                  modules: true
                }
              }
            ],
            include: /\.module\.css$/
          },
          {
            test: /\.png$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  mimetype: 'image/png'
                }
              }
            ]
          }
        ]
      }
    };

module.exports = config;