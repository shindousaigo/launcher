const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
const Chalk = require('chalk')
const Yargs = require('yargs')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/**
 * SERVER: 'http://sdk-test.changic.net.cn:1612'
 * SERVER: 'http://start-sg-sdk.pocketgamesol.com'
 * SERVER: 'http://start-vn-sdk.pocketgamesol.com'
 * SERVER: 'http://start-de-sdk.pocketgamesol.com'
 */
var SERVER = ''
var VERSION = ''
var {
	argv: {
		action,
		mode
	}
} = Yargs

{ // version set
	if (action === 'sophix') {
		VERSION = 'sophix'
	} else if (action === 'tinker') {
		VERSION = 'tinker'
	} else if (action === 'obb') {
		VERSION = 'obb'
	} else if (action === 'dev') {
		SERVER = 'http://sdk-test.changic.net.cn:1612'
	} else {
		console.log(
			Chalk.red.bold('miss action sophix/tinker/obb')
		)
		process.exit()
	}
}

var entry = {
	main: './src/main.ts'
}
var output = {
	path: Path.join(__dirname, 'build'),
	filename: '[name].js',
	chunkFilename: '[name].js',
	publicPath: './'
}
var definePlugin = {
	SERVER: JSON.stringify(SERVER),
	VERSION: JSON.stringify(VERSION),
}
var plugins = [
	new HtmlWebpackPlugin({
		filename: "index.html",
		chunks: ['main'],
		template: mode === 'production' ? "./index.html" : "./index.test.html"
	}),
	new Webpack.ProvidePlugin({
		md5: 'md5'
	}),
	new Webpack.DefinePlugin(definePlugin),
]
var webpackConfig = {
	entry,
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
		alias: {
			Base: Path.join(__dirname, 'src/Base'),
			SDK: Path.join(__dirname, 'src/SDK'),
			FBinstant: Path.join(__dirname, 'src/FBinstant'),
			DOM: Path.join(__dirname, 'src/DOM'),
			Src: Path.join(__dirname, 'src'),
			src: Path.join(__dirname, 'src'),
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
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}, {
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
		}, {
			test: /\.(ts|tsx)$/,
			use: [
				'ts-loader'
			]
		}, {
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[name]-[hash:4].[ext]',
					outputPath: './img'
				}
			}]
		}]
	},
	plugins,
	devServer: {
		contentBase: Path.join(__dirname, 'build'),
		inline: true,
		port: 3000
	}
}

if (mode === 'production') {
	webpackConfig.plugins.push(
		new CleanWebpackPlugin([
			Path.join(__dirname, 'build', '**/*.js'),
			Path.join(__dirname, 'build', '**/*.zip')
		])
	)
	webpackConfig.optimization = {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: {
						drop_console: true
					}
				}
			})
		]
	}
}

console.log(
	`> mode: ${Chalk.yellow(mode)}\n> action: ${Chalk.yellow(action)}\n> server: ${Chalk.yellow(SERVER || './')}\n`
)

module.exports = webpackConfig