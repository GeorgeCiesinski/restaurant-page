const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    baseLayout: './src/baseLayout.js',
    copyright: './src/copyright.js',
    home: './src/home.js',
    menu: './src/menu.js',
    contact: './src/contact.js'
  },
  plugins: [
    new HtmlWebpackPlugin({  // Creates a new index.html file
      title: "Restaurant Page",
      template: "./src/template.html"  // Uses basic template
    })
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',  // For multiple entry points
  }
};