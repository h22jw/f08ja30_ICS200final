// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'colorguessr.html',
      template: "./src/colorguessr.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'cpstest.html',
      template: "./src/cpstest.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'gamble.html',
      template: "./src/gamble.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'lob.html',
      template: "./src/lob.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'randomdclink.html',
      template: "./src/randomdclink.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'randomytlink.html',
      template: "./src/randomytlink.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'reactiontest.html',
      template: "./src/reactiontest.html",
    }),
    new HtmlWebpackPlugin({
      filename: 'tictactoe.html',
      template: "./src/tictactoe.html",
    }),
  ],
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
        },
        {
            test: /\.html$/,
            use: ["html-loader"],
        },
        {
          test: /\.(mp4|svg|png|jpeg|gif|ogg|jpg)$/,
          type: 'asset/resource',
          generator: {
            filename: 'media/[name][ext]'
          },
        }
    ]
  }
};