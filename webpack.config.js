const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    chunkFilename: "[name].[contenthash].js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_APIENDPOINT": JSON.stringify(
        "https://www.fivesocnet.online:2053"
      ),
    }),

    // new CompressionPlugin({
    //   // Be very carefully with 'true', sometimes bug happens
    //   deleteOriginalAssets: false,
    //   algorithm: "gzip",
    //   test: /\.(js|css|html)$/,
    // }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, "/public"),
    },
    port: 3000,

    // historyApiFallback: {
    //   index: "/dist/index.html",
    // },
    historyApiFallback: true,
    open: true,
    hot: true,
  },

  performance: { hints: false },
};
