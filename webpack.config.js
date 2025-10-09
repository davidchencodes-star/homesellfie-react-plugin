const defaults = require("@wordpress/scripts/config/webpack.config");

module.exports = {
	...defaults,
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
	devtool: false,
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000,
	},
};
