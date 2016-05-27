var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "app.js"
  },
  module: {
    loaders: [
      {
      	test: /\.js$/,
      	include: __dirname + '/src',
      	loader: "babel-loader"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};