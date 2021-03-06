const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: [
        './src/index.jsx',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {test: /\.jsx$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader'},
            {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                eslint: {
                    configFile: './.eslintrc.js',
                },
            },
        }),
    ],
};