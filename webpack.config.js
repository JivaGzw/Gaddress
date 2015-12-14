var webpack = require('webpack');

module.exports = {
	entry: {
		Login: './views/scripts/login.js',
		Register: './views/scripts/register.js',
		Contacts: './views/scripts/contacts.js',
		People: './views/scripts/people.js',
		Edit: './views/scripts/edit.js',
		PeopleNew: './views/scripts/people_new.js',
		Display: './views/scripts/display.js',
		vendor: ["react", "react-dom", "react-bootstrap", "jquery"]
	},
	output: {
		path: './build',
		publicPath: './build',
		filename: '[name].js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("vendor", "common.js"),
		new webpack.optimize.MinChunkSizePlugin({}),
		new webpack.ProvidePlugin({
			$ : 'jquery'
		}),//使jquery成为全局变量，其他文件中不用再require('jquery')。
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("development")
			}
		})
	],
	module: {
		loaders: [
			{ test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{ test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader?harmony'},
			{ test: /\.css$/, loader: 'style-loader!css-loader'},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
		]
	}
};