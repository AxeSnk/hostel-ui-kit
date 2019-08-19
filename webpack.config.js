const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'index' : './src/index.js',
        'uikit' : './src/pages/ui-kit/ui-kit.js',
        'signin' : './src/pages/sign-in/sign-in.js',
        'registration' : './src/pages/registration/registration.js',
        'searchroom' : './src/pages/search-room/search-room.js',
        'landingpage' : './src/pages/landing-page/landing-page.js',
        'roomdetails' : './src/pages/room-details/room-details.js'
    },
    output: {
        filename: './src/js/[name].js',
        path: __dirname + '/docs'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include: [
                    path.resolve(__dirname, './src/fonts')
                ],
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'src/fonts',
                    publicPath: '../fonts'
                }
            },
            {
                test: /\.(jpg|png|svg|gif)$/,
                exclude: [
                    path.resolve(__dirname, './src/fonts')
                ],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'src/img/',
                            publicPath: '../img'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 70
                            }
                        }
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: ['html-loader? attrs = false', 'pug-html-loader']
            },
        ]
    },
    plugins: [
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
            filename: './src/css/[name].css',
            template: './src/index.scss',
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            template: './src/pages/ui-kit/ui-kit.scss',
            chunks: ['uikit']
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            template: './src/pages/sign-in/sign-in.scss',
            chunks: ['signin']
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            template: './src/pages/registration/registration.scss',
            chunks: ['registration']
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            template: './src/pages/search-room/search-room.scss',
            chunks: ['searchroom']
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            template: './src/pages/landing-page/landing-page.scss',
            chunks: ['landingpage']
        }),
        new MiniCssExtractPlugin({
            filename: './src/css/[name].css',
            template: './src/pages/room-details/room-details.scss',
            chunks: ['roomdetails']
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jquery': 'jquery'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {
                    discardComments: {
                        removeAll: true
                    }
                }]
            },
            canPrint: true
        }),
    ]
}