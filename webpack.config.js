const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
const Chalk = require('chalk')
const Yargs = require('yargs')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    if (action) {
        if (action === 'dev') SERVER = 'http://sdk-test.changic.net.cn:1612'
        VERSION = action
    } else {
        console.log(
            Chalk.red.bold('miss action')
        )
        process.exit()
    }
}
var entry = {
    main: './src/main.ts'
}
var output = {
	path: Path.join(__dirname, './build'),
	filename: '[name].js?[hash:4]',
	chunkFilename: '[name].js?[hash:4]',
}
var definePlugin = {
    SERVER: JSON.stringify(SERVER),
    VERSION: JSON.stringify(VERSION),
}
var htmlWebpackPluginOption = {
    filename: "index.html",
    chunks: ['main'],
    template: "./index.test.html"
}
var devServer = {
    contentBase: output.path,
    inline: true,
    port: 3000
}
var plugins = [
    new Webpack.ProvidePlugin({
        md5: 'md5'
    }),
    new Webpack.DefinePlugin(definePlugin),
    new CopyWebpackPlugin([{
    	from: Path.resolve(__dirname, './assets/games/dafeiji/res'),
    	to: 'res'
    }]),
     new CopyWebpackPlugin([{
       from: Path.resolve(__dirname, './assets/games/picture_match/assets'),
       to: 'picture_match'
     }]),
     new CopyWebpackPlugin([{
       from: Path.resolve(__dirname, './assets/games/2048/css'),
       to: '2048'
     }]),
    new CleanWebpackPlugin([
        Path.join(__dirname, 'build', '**/*.js'),
        Path.join(__dirname, 'build', '**/*.zip')
    ])
]
var optimization = {}
if (mode === 'production') {
    htmlWebpackPluginOption.template = './index.html'
    output.publicPath = './'
    // optimization.minimizer = [
    // 	new UglifyJsPlugin({
    // 		exclude: /\/material-ui/,
    // 		uglifyOptions: {
    // 			compress: {
    // 				drop_console: true
    // 			}
    // 		}
    // 	})
    // ]
}
plugins.push(
    new HtmlWebpackPlugin(htmlWebpackPluginOption)
)
var webpackConfig = {
    entry,
    output,
    plugins,
    devServer,
    optimization,
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            Base: Path.join(__dirname, 'src/Base'),
            SDK: Path.join(__dirname, 'src/SDK'),
            FBinstant: Path.join(__dirname, 'src/FBinstant'),
            DOM: Path.join(__dirname, 'src/DOM'),
            Src: Path.join(__dirname, 'src'),
            src: Path.join(__dirname, 'src'),
            assets: Path.join(__dirname, 'assets'),
            root: Path.join(__dirname, './'),
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: [
                            // 'transform-remove-console',
                            ['@babel/plugin-proposal-class-properties', {
                                loose: true
                            }],
                            ['@babel/plugin-proposal-object-rest-spread', {
                                loose: true
                            }],
                            '@babel/plugin-transform-object-assign',
                            '@babel/plugin-transform-runtime'
                        ]
                    }
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
    }
}

console.log(
    `> mode: ${Chalk.yellow(mode)}\n> action: ${Chalk.yellow(action)}\n> server: ${Chalk.yellow(SERVER || './')}\n`
)

module.exports = webpackConfig
