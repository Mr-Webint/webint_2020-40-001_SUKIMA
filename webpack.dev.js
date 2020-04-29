const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path');
const outputPath = path.resolve(__dirname, "/dist");

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: `${outputPath}/`, 
		open: true,
		hot: true,
		watchContentBase: true
	}
})