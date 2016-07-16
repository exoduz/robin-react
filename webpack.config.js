//http://survivejs.com/webpack/introduction/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const validate = require('webpack-validator'); //validates webpack schema

module.exports = validate({
  entry: [
    path.join(__dirname, 'src', 'main.js')
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      {
      	test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      	loader: 'url?limit=10000&mimetype=application/font-woff'
      },
      {
      	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      	loader: 'url?limit=10000&mimetype=application/octet-stream'
      },
      {
      	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      	loader: 'file'
    	},
      {
      	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      	loader: 'url?limit=10000&mimetype=image/svg+xml'
    	}
    ]
  },
	resolve: {
		extensions: ['', '.js', '.jsx', '.json']
	},
  plugins: [
  	new HtmlWebpackPlugin({
		  template: path.join(__dirname, 'src', 'index.html'),
		  filename: 'index.html',
		  inject: 'body'
		}),
		new ExtractTextPlugin("css/style.min.css", { allChunks: false }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify("development") //development || production
      }
    })
	]
});
