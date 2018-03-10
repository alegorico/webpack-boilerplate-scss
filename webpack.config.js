const HtmlWebPackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "source-map",
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
            loader: "css-loader" , options: {
                    sourceMap: true
            }
        }, {
            loader: "sass-loader" , options: {
                    sourceMap: true
            }
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
