var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("@babel/core");
module.exports = {
  entry: path.resolve(__dirname, "src", "script.ts"),
  mode: "development",
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"],
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
    ],
  },
};
