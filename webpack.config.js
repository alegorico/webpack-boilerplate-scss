const HtmlWebPackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./css/[name].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  // devtool: "source-map",
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader",
            options: {
                sourceMap: true
            }
            },{
            loader: "sass-loader",
            options: {
                sourceMap: true
            }
          }],
          fallback: "style-loader"
        })
      },
      {
        test: /\.html$/,
        use: [{
            loader: "html-loader",
            options: {
              //minimize: true
            }
          }]
      }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/assets/index.html",
      // showErrors: true,
      filename: "index.html"
    }),
    extractSass
  ]
};
