const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].[contenthash].js',
  },
  resolve:{
    extensions: ['.js']
  },
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
          filename: 'assets/images/[name].[contenthash][ext][query]'
        }
      },
      {
        test: /\.woff2$/,
        type: 'asset/resource',
        generator:{
          filename: 'assets/fonts/[name].[contenthash][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].[contenthash].css'
    }),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    minimize: true,
    minimizer: [`...` , new CssMinimizerPlugin()],
  }
}