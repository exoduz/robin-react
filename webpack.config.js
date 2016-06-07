var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/components/App.js'
  ],
  output: {
    path: path.resolve(__dirname, "build"),
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
      },
      //Boostrap 
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }

    ]
  },
	resolve: {
		extensions: ['', '.js', '.json']
	},
  plugins: [
  	new HtmlWebpackPlugin({
		  template: __dirname + '/src/index.html',
		  filename: 'index.html',
		  inject: 'body'
		}),
		new ExtractTextPlugin("style.css", { allChunks: false })
	]
};