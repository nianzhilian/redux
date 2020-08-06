const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    // output: {
    //     filename: "js/[name].[hash:16].js",//我们开启了hot，那么导出不能使用chunkhash，需要替换为hash。
    // },
    module: {
        rules:
            [
                {
                    test: /\.(css)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[local]__[hash:7]'
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        }
                    ]
                },
                {
                    test: /\.(less)$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                localIdentName: '[local]__[hash:7]'
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                }
            ]
    },
    plugins: [
        //配置环境转换
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        //配置html
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            minify: {
                html5: true
            },
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()//热更新
    ],
    devServer: {
        port: '8081',
        contentBase: path.join(__dirname, '../public'),
        compress: true,
        historyApiFallback: true,
        disableHostCheck: true,
        hot: true,
        https: false,
        noInfo: true,
        open: true,
        proxy: {}
    }
});
