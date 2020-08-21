const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
};

module.exports = {
  entry: {
    index: './src/index.js'
  },
  devtool: 'source-map',
  output: {
    filename: 'js/[name].js',
    path: PATHS.dist
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [path.resolve(__dirname, './src/fonts')],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts'
        }
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        exclude: [path.resolve(__dirname, './src/fonts')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img'
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        use: ['html-loader? attrs = false', 'pug-html-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit.html',
      template: './src/pages/ui-kit/ui-kit.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './src/pages/form-elements/form-elements.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './src/pages/cards/cards.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-footers.html',
      template: './src/pages/headers-footers/headers-footers.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './src/pages/sign-in/sign-in.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-up.html',
      template: './src/pages/sign-up/sign-up.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: './src/pages/landing/landing.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './src/pages/search-room/search-room.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './src/pages/room-details/room-details.pug'
    }),

    new MiniCssExtractPlugin({
      filename: 'styles.css',
      template: './src/index.scss'
    }),

    new CopyPlugin([{ from: './src/favicons', to: 'favicons/' }]),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
    })
  ]
};
