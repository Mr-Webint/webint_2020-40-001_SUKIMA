const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const path = require('path');

module.exports = merge(common,{
	mode: 'production',
	entry: './src/js/index.js',
	output: {
		path: path.join(__dirname, '/wordpress/files/js'),
		filename: 'bundle.js'
	},
})