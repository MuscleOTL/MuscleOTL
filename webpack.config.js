const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Jeff comment
// Jeff comment 2

module.exports = {
    mode: 'development', 
    entry: {
        index: './client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            publicPath: "/build/bundle/js",
            directory: path.join(__dirname, 'client/static'),
        },
        compress: true,
        port: 8080,
        proxy: {
            '/api': 'http://localhost:3000/'
        },

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/static/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
                }
            },
            
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    resolve: {
        // extensions: ['.js', '.jsx'],
        modules: [path.join(__dirname, '/node_modules')]
    },
}