const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/script.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[name][ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    })
  ],
  devServer: {
    static: "./dist",
    hot: true
  }
};
