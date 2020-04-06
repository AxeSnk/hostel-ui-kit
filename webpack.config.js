const path = require('path');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs.readdirSync(PAGES_DIR);

// module.exports = {
//   resolve: {
//     alias: {
//       blocks: path.resolve(__dirname, 'src/blocks')
//     }
//   },
//   entry: {
//     'index': './src/index.js',
//     'uikit': './src/pages/ui-kit/ui-kit.js',
//     // signin: './src/pages/sign-in/sign-in.js',
//     // registration: './src/pages/registration/registration.js',
//     // searchroom: './src/pages/search-room/search-room.js',
//     // landingpage: './src/pages/landing-page/landing-page.js',
//     // roomdetails: './src/pages/room-details/room-details.js'
//   },

//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'js/[name].js'
//   },

//   module: {
//     rules: [
//       {
//         test: /\.pug$/,
//         loader: 'pug-loader'
//       },
//       {
//         test: /\.s?css$/,
//         loader: [
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'postcss-loader',
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.(woff(2)?|ttf|eot|svg)$/,
//         include: [path.resolve(__dirname, 'src/fonts')],
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'fonts'
//           }
//         }
//       },
//       {
//         test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
//         exclude: [path.resolve(__dirname, 'src/fonts')],
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'images'
//           }
//         }
//       },
//       {
//         test: /\.(svg|png|ico|xml|json|manifest)$/,
//         include: [path.resolve(__dirname, 'src/favicons')],
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].[ext]',
//               outputPath: 'favicon'
//             }
//           }
//         ]
//       }
//     ]
//   },

//   plugins: [
//     new CleanWebpackPlugin(),
//     ...PAGES.map(
//       page =>
//         new HtmlWebpackPlugin({
//           filename: `${page}.html`,
//           template: `${PAGES_DIR}/${page}/${page}.pug`
//         })
//     ),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css'
//     }),
//     new webpack.ProvidePlugin({
//       $: 'jquery',
//       jQuery: 'jquery',
//       'window.jQuery': 'jquery'
//     })
//   ],

//   devServer: {
//     contentBase: path.join(__dirname, 'dist'),
//     overlay: true
//   }
// };

module.exports = {
  entry: {
    index: './src/index.js',
    // uikit: './src/pages/ui-kit/ui-kit.js',
    // 'form-elements': './src/pages/form-elements/form-elements.js'
    // signin: './src/pages/sign-in/sign-in.js',
    // registration: './src/pages/registration/registration.js',
    // searchroom: './src/pages/search-room/search-room.js',
    // landingpage: './src/pages/landing-page/landing-page.js',
    // roomdetails: './src/pages/room-details/room-details.js'
  },
  devtool: 'source-map',
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
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit.html',
      template: './src/pages/ui-kit/ui-kit.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './src/pages/form-elements/form-elements.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './src/pages/cards/cards.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-footers.html',
      template: './src/pages/headers-footers/headers-footers.pug',
    }),

    // new HtmlWebpackPlugin({
    //   filename: 'sign-in.html',
    //   template: './src/pages/sign-in/sign-in.pug',
    //   chunks: ['signin']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'registration.html',
    //   template: './src/pages/registration/registration.pug',
    //   chunks: ['registration']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'search-room.html',
    //   template: './src/pages/search-room/search-room.pug',
    //   chunks: ['searchroom']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'landing-page.html',
    //   template: './src/pages/landing-page/landing-page.pug',
    //   chunks: ['landingpage']
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'room-details.html',
    //   template: './src/pages/room-details/room-details.pug',
    //   chunks: ['roomdetails']
    // }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      template: './src/index.scss'
    }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   template: './src/pages/sign-in/sign-in.scss',
    //   chunks: ['signin']
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   template: './src/pages/registration/registration.scss',
    //   chunks: ['registration']
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   template: './src/pages/search-room/search-room.scss',
    //   chunks: ['searchroom']
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   template: './src/pages/landing-page/landing-page.scss',
    //   chunks: ['landingpage']
    // }),
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css',
    //   template: './src/pages/room-details/room-details.scss',
    //   chunks: ['roomdetails']
    // }),

    new CopyPlugin([{ from: './src/favicons', to: 'favicons/' }]),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jquery': 'jquery'
    })
  ]
};
