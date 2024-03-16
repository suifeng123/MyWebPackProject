// commonjs
module.exports = {
	mode: "none",
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
			}
		]
	},
	plugins: []
}