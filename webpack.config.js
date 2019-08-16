const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        'index' : './src/index.js',
        './src/pages/ui-kit/ui-kit' : './src/pages/ui-kit/ui-kit.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
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
                    outputPath: './src/fonts/',
                    useRelativePath: true
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
                            outputPath: './src/img/',
                            useRelativePath: true
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
            filename: './src/pages/ui-kit/ui-kit.html',
            template: './src/pages/ui-kit/ui-kit.pug',
            chunks: ['./src/pages/ui-kit/ui-kit']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            template: './src/index.scss',
            chunks: ['index']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            template: './src/pages/ui-kit/ui-kit.scss',
            chunks: ['./src/pages/ui-kit/ui-kit']
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