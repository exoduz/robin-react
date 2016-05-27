var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/components/App.js'
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/app.js",
  },
  module: {
    loaders: [
      {
      	test: /\.js$/,
      	include: __dirname + '/src',
      	loader: "babel-loader",
      	exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};