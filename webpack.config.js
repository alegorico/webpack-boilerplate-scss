const HtmlWebPackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.html$/,
        use: [{
            loader: "html-loader",
            options: { minimize: true }
          }]
      }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./assets/index.html",
      filename: "./index.html"
    })
  ]
};
