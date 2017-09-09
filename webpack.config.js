'use strict';
const pjson = require('./package.json');
const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rimraf = require('rimraf');
const AssetsPlugin = require('assets-webpack-plugin');

function addHash(template, hash) {
	return NODE_ENV === 'production' ? template.replace(/\.[^.]+$/, `.[${hash}]$&`) : template;
}

module.exports = {
	context: `${__dirname}${path.sep}frontend${path.sep}javascript`,
	entry: {
		common: './index'
	},
	output: {
		path: `${__dirname}/public/assets`,
		publicPath: `/public/assets/`,
		filename: addHash('[name].js', 'chunkhash'),
		chunkFilename: addHash('[id].js', 'chunkhash'),
		library: '[name]'
	},

	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules']
	},

	resolveLoader: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js'],
		moduleTemplates: ['*-loader', '*']
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel!eslint',
				exclude: [/node_modules/, /extensions_modules/]
			},
			{
				test: /\.(png|jpg)$/,
				loader: addHash('file?name=[path][name].[ext]', 'hash:6')
			},
			{ test: /\.css$/, loader: 'style!css' },

			{ test: /\.(scss|sass)$/, loader: ExtractTextPlugin.extract('css!autoprefixer!sass') },

			{ test: /\.svg$/, loader: 'url?limit=2000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },

			{ test: /\.woff$/, loader: 'url?limit=2000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
			{ test: /\.woff2$/, loader: 'url?limit=2000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
			{ test: /\.[ot]tf$/, loader: 'url?limit=2000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
			{ test: /\.eot$/, loader: 'url?limit=2000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' }
		]
	},

	devServer: {
		host: 'localhost',
		port: '8082',
		contentBase: `${__dirname}/public`
	},

	watch: NODE_ENV === 'development',
	watchOptions: {
		aggregateTimeout: 100
	},
	devtool: NODE_ENV === 'development' && 'eval',

	plugins: [
		{
			apply: compiler => rimraf.sync(compiler.options.output.path)
		},

		new ExtractTextPlugin(addHash('[name].css', 'contenthash'), {
			allChunks: true
		}),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			// chunks: ['about', 'home']
			// minChunks: 2
		}),

		new AssetsPlugin({
			filename: 'assets.json',
			path: `${__dirname}/public`
		}),

		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(NODE_ENV)
			}
		}),

		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: 'jquery'
		})
		// new webpack.NoErrorsPlugin()
	]
};

if (NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	)
}
