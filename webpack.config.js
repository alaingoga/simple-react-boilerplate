 var path = require('path');
 var webpack = require('webpack');
 module.exports = {
     entry: './src/index.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'bundle.js'
     },
     module: {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader"
              }
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        watchContentBase: true,
        port: 9000
    },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
