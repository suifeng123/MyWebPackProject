// commonjs
const minicss = require("mini-css-extract-plugin")
const cssminimizer = require("css-minimizer-webpack-plugin")
module.exports = {
	mode: "development",
	entry: {
		app: "./app.js"
	},
	output: {
		path: __dirname + "/dist",
		filename: "[name].[hash:4].bundle.js" // app 代表入口名字
	},
	devServer: {},
	resolve: {},
	optimization: {},
	// loader
	module: {
		rules: [
			{	
				test: /\.css/,
				use: [minicss.loader,"css-loader"]
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				loader: "url-loader",
				options: {
					limit: 2000000,
					name: "[name].[hash].[ext]"
				}
			}
		]
	},
	plugins: [
		new minicss({
			filename: "test.bundle.css"
		}),
		new cssminimizer()
	]
}