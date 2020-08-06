const path = require('path');
const config=require('../config');
const APP_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
module.exports = {
    entry: {
        app: './src/index.jsx',
        framework:['react','react-dom']//不变的代码分开打包
    },    
    output: {
        // filename: 'js/bundle.js',
        // path: DIST_PATH
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'
          ? config.build.assetsPublicPath
          : config.dev.assetsPublicPath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                include: APP_PATH
            }
        ]
    }
};
