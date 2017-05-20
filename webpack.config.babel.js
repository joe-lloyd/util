import * as path from "path";

module.exports = {
	entry: {
		app: "./src/index.js"
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'source-map'
};