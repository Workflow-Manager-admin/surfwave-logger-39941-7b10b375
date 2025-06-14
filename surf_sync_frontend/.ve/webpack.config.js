/*
  Custom Webpack config for KAVIA visual editing / rapid preview
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/', // This line is correct for dev server
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'),
      inject: 'body',
      minify: false,
      // Use the environment variable (for SPA dev, can be blank or '/')
      templateParameters: {
        PUBLIC_URL: process.env.PUBLIC_URL || '',
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    port: 3000,
    historyApiFallback: true,
  },
};
