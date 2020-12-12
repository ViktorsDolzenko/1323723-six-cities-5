const HtmlWebpackPlugin = require('html-webpack-plugin');
const path  = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        open: true,
        port: 3000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              use: [
                {
                  loader: 'file-loader',
                },
              ],
            },
        ],

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin({template: "public/index.html"}),]
};
