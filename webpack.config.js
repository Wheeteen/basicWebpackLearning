// import "babel-polyfill";
// require('babel-polyfill');
module.exports = {
	entry: './main.js',
	output: {
		filename: 'bundle.js'
	},
	module: {
		rules: [
	      {
	      	test: /\.(js|jsx)$/,
	      	loader: 'babel-loader',
	      	exclude: /node_modules/
	      }
		]
	}
}