const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve:{
    extensions: ['.js'],
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@templates': path.resolve(__dirname, 'src/templates/'),
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    }
  },
  mode: 'development',
  module:{
    rules:[
      {
        test: /\.m?js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.png$/i,
        type: 'asset/resource',
        generator:{
          filename: 'assets/images/[name][ext][query]'
        }
      },
      {
        test: /\.woff2$/,
        type: 'asset/resource',
        generator:{
          filename: 'assets/fonts/[name][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css'
    }),
    new DotenvWebpackPlugin(),
  ],
}