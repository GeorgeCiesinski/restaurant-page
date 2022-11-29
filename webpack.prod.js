const path = require('path');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "img/[name].[hash][ext]",  // bundle images with hash in name
    clean: true,  // Cleans dist folder before creating new bundle
  },
});