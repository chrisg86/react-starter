const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  return {
    entry: "./src/index.js",

    output: {
      path: path.resolve(__dirname, "build"),
      filename: "[name].bundle.js",
    },

    devtool: "eval-source-map",

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("autoprefixer")],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/",
              },
            },
          ],
        },
      ],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "style.css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],

    devServer: {
      contentBase: path.join(__dirname, "build"),
      compress: true,
      port: 9000,
      open: true,
      hot: true,
      historyApiFallback: true,
    },
  };
};
