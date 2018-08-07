var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  context: path.resolve(__dirname, 'app'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {test: /\.(js)$/, use: 'babel-loader'},
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {
        test: /\.(svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name() {
              if (process.env.NODE_ENV === 'production') {
                return '[hash].[ext]'
              }
              return '[name].[ext]'

            },
            publicPath: 'images/',
            outputPath: 'images/'

          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  devServer: {
    historyApiFallback: true
  },

};

module.exports = config;