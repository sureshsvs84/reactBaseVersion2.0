require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BUILD_DIR = path.join(__dirname, 'build');
const indexFile = path.resolve(__dirname, 'src/index.js');
const configuration = require('./config.js');

var config = {
    entry: indexFile,
    externals: {
        'configuration': JSON.stringify(configuration)
    },
    output: {
        publicPath: "/",
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    target: 'web',
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'

            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader", options: {
                    limit: 100000,
                    name: './images/[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }, {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            publicPath: '/public/assets/',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    publicPath: '/public/assets/',
                    name: './fonts/[name].[hash].[ext]'
                }
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            "node_modules"
        ],
        extensions: [".json", ".js", ".jsx"],
        alias: {
            stringUtil: "src/utils/stringUtil",
            rootComponentReducer: "src/reducer/rootComponentReducer",
            appConstants: "src/constants/appConstants",
            actionTypes: "src/constants/actionTypes",
            baseServiceApi: "src/services/api/baseServiceApi"
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tatvam',
            template: path.resolve(__dirname, 'public/index.ejs')
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV']), new CopyWebpackPlugin([
            {
                from: 'public/assets/images',
                to: 'images'
            }
        ])
    ]
};

module.exports = config;