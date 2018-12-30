const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const configuration = require('./config.js');
const path = require('path');
const BUILD_DIR = path.join(__dirname, 'build');
const port = configuration.client.port;
let host = configuration.client.host;
const clientEndPoint = "/" + configuration.client.endpoint;

let devServerOptions = {
	contentBase: BUILD_DIR,
	compress: true,
	inline: true,  //option adds “Live reloading” for the entire page.,
	port: port,
	host: host,
	publicPath: '/',
	historyApiFallback: true,
	stats: {
		colors: true
	},
	watchContentBase: true
};

const getOpenUrl = function () {
	let openUrl;
	try {
		host = host === "0.0.0.0" ? "http://localhost" : host;
		return host + ":" + port + clientEndPoint;
	} catch (e) {
		return true;
	}
}
devServerOptions.open = getOpenUrl();

module.exports = merge(common, {
	devtool: 'source-map',
	devServer: devServerOptions
});