var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      // publicPath: '/dist'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              use: [
                  {
                      loader: 'babel-loader',
                      options: {
                          presets: ['es2015']
                      }
                  }
              ]
          },
          {
              test: /\.html$/,
              use: ['html-loader']
          },
          {
              test: /\.(jpg|png)$/,
              use: [
                  {
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'img/',
                          publicPath: 'img/'
                      }
                  }
              ]
          }
      ]
  },
  plugins: [
         new HtmlWebpackPlugin({
          template: 'src/index.html'
      }),
      new CleanWebpackPlugin(['dist'])
  ]
};
