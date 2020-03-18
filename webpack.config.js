const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    uikit: './src/pages/ui-kit/ui-kit.js',
    signin: './src/pages/sign-in/sign-in.js',
    registration: './src/pages/registration/registration.js',
    searchroom: './src/pages/search-room/search-room.js',
    landingpage: './src/pages/landing-page/landing-page.js',
    roomdetails: './src/pages/room-details/room-details.js'
  },
  output: {
    filename: 'js/[name].js',
    path: __dirname + '/dist'
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
          outputPath: 'fonts',
          publicPath: '../fonts'
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
              outputPath: 'img',
              publicPath: '../img'
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
      template: './src/index.pug',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit.html',
      template: './src/pages/ui-kit/ui-kit.pug',
      chunks: ['uikit']
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      template: './src/pages/sign-in/sign-in.pug',
      chunks: ['signin']
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      template: './src/pages/registration/registration.pug',
      chunks: ['registration']
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './src/pages/search-room/search-room.pug',
      chunks: ['searchroom']
    }),
    new HtmlWebpackPlugin({
      filename: 'landing-page.html',
      template: './src/pages/landing-page/landing-page.pug',
      chunks: ['landingpage']
    }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './src/pages/room-details/room-details.pug',
      chunks: ['roomdetails']
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/index.scss',
      chunks: ['index']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/pages/ui-kit/ui-kit.scss',
      chunks: ['uikit']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/pages/sign-in/sign-in.scss',
      chunks: ['signin']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/pages/registration/registration.scss',
      chunks: ['registration']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/pages/search-room/search-room.scss',
      chunks: ['searchroom']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/pages/landing-page/landing-page.scss',
      chunks: ['landingpage']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/pages/room-details/room-details.scss',
      chunks: ['roomdetails']
    }),

    new CopyPlugin([{ from: './src/favicon.ico', to: 'img/' }]),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    })
  ]
};
