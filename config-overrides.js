//import { override, addBabelPlugin } from "customize-cra";
const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
	addBabelPlugins(
		"babel-plugin-styled-components"
	)
);