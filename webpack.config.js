const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Chalk = require('chalk')
const Yargs = require('yargs')
const md5 = require('md5')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var SERVER = 'http://sdk-test.changic.net.cn:1612'
var https = false
var isTest = true
var version = '0.930'
var {
	argv
} = Yargs
var action = argv.action

/** 添加adapter代码 */
var entry = path.join(__dirname, './src/main.ts')

var output = {
	path: path.join(__dirname, 'build'),
	filename: '[name].js',
	chunkFilename: '[name].js',
}

switch (action) {
	case 'build-test':
		isTest = true
		output.publicPath = './'
		break;
	case 'build-sg':
		isTest = false
		SERVER = 'http://start-sg-sdk.pocketgamesol.com'
		output.publicPath = './'
		break;
	case 'build-de':
		isTest = false
		SERVER = 'http://start-de-sdk.pocketgamesol.com'
		output.publicPath = './'
		break;
	case 'build-vn':
		isTest = false
		SERVER = 'http://start-vn-sdk.pocketgamesol.com'
		output.publicPath = './'
		break;
	case 'devs':
		isTest = true
		https = true
		break;
}

var definePlugin = {
	isTest,
	SERVER: JSON.stringify(SERVER),
	version: JSON.stringify(version),
}

var webpackConfig = {
	entry,
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			'@': path.join(__dirname, 'src'),
		}
	},
	output,
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
				}]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('autoprefixer')(),
							]
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					'ts-loader'
				]
			},
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[name]-[hash:4].[ext]',
						outputPath: './img'
					}
				}]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			chunks: ['main'],
			template: isTest ? "./index.test.html" : "./index.html"
		}),
		new webpack.ProvidePlugin({
			md5: 'md5'
		}),
		new webpack.DefinePlugin(definePlugin),
	],

	devServer: {
		contentBase: path.join(__dirname, 'build'),
		inline: true,
		port: 99,
		https
	}
}


if (argv.mode === 'production') {

	webpackConfig.plugins.push(
		new CleanWebpackPlugin([
			path.join(__dirname, 'build', '**/*.js'),
			path.join(__dirname, 'build', '**/*.zip')
		])
	)

	// webpackConfig.optimization = {
	// 	minimizer: [
	// 		new UglifyJsPlugin({
	// 			uglifyOptions: {
	// 				compress: {
	// 					drop_console: true
	// 				}
	// 			}
	// 		})
	// 	]
	// }

}


module.exports = webpackConfig