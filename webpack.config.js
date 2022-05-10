const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './public/index.html',
      }
    ),
    new MiniCssExtractPlugin(),
  ],
}