const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const config=require('../config');
const utils=require('./utils');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');//编译模板文件在模板里自动添加js
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//清理dist目录
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //压缩js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//导出css
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');//压缩css

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    output: {
        // filename: "js/[name].[chunkhash:16].js",
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash:16].js'),
        chunkFilename: utils.assetsPath('js/[name].[chunkhash].js')
    },
    module: {
        rules:
            [
                {
                    test: /\.(css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                sourceMap:true,
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
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: true,
                                sourceMap:true,
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
        require('autoprefixer'),
        //配置环境转换
        new webpack.DefinePlugin({
            'process.env': require('../config/prod.env')
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
        }),
        // new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
        // new CleanWebpackPlugin([config.build.assetsRoot], { allowExternal: true }),
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].[hash].css',
        //     chunkFilename: 'css/[id].[hash].css',
        // }),//导出样式
        new MiniCssExtractPlugin({
            filename: utils.assetsPath('css/[name].[hash].css'),
            chunkFilename: utils.assetsPath('css/[id].[hash].css'),
        }),        
    ],
    //webpack3版本是通过配置CommonsChunkPlugin插件来抽离公共的模块
    //webpack4改用配置optimization.splitChunks的方式，  可以被浏览器缓存
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                framework: {
                    test: "framework",
                    name: "framework",
                    enforce: true
                },
                vendor: {
                    priority: 10,
                    test: /node_modules/,
                    name: "vendor",
                    enforce: true,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: [
            new UglifyJSPlugin(),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: true
                    ? {
                        map: { inline: false }
                    }
                    : {}
            })
        ],
    }
});

//添加gzip压缩插件
if (config.build.productionGzip) {
    const CompressionWebpackPlugin = require('compression-webpack-plugin')

    webpackConfig.plugins.push(
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          config.build.productionGzipExtensions.join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  //查看每个文件有哪些模块被编译进去。
  if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
  }


module.exports = webpackConfig;
