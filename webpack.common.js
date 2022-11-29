const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({  // Creates a new index.html file
      title: "Restaurant Page",
      template: "./src/template.html"  // Uses basic template
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",  // 3. Inject styles into DOM
          "css-loader",    // 2. Turn CSS into commonJS
          "sass-loader",   // 1. Turn SASS into CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};