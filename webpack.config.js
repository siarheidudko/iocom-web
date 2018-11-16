const path = require('path');
const webpack = require("webpack");

const _path = (function(){
	if(process.argv.indexOf('production') !== -1){ 
		return '../iocom-server/public/';
	} else { 
		return '../iocom-server/public/test';
	}})();
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [],
  entry: {
	filename: path.resolve(__dirname, './src/') + '/iocom.js'
  },
  output: {
    path: path.resolve(__dirname, _path),
    filename: 'iocommander-bundle.js',
	libraryTarget: "umd"
  }
};