const {resolve} = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

	mode: "development",
	watch: true,

	watchOptions: {
		poll: true
	},

	devServer: {
		contentBase: "./",
	},

	entry: "./src/jsx/app.jsx",

	output: {
		path: resolve(__dirname, "dist"),
		filename: "app.js",
		publicPath: "/dist/"
	},

	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015", "stage-2", "react"]
					}
				}
			}, {
				test: /\.(scss|css)/,
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "sass-loader"]
				})
			}
		]
	},

	plugins: [new ExtractTextPlugin("style.css")]

}
