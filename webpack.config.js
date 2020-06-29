const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";
  return {
    entry: ["babel-polyfill", path.join(__dirname, "./src/index.js")],
    output: {
      // 入口文件
      filename: "index.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer") /*在这里添加*/],
              },
            },
          ],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {},
            },
          ],
        },
      ],
    },
    devServer: {
      port: 3000, //端口号
      overlay: true, // 开启错误调试,
      hot: true, //是否开启hot-module-replacement
      https: false, // 如果需要用https请开启，如http2
      compress: false, //是否启用 gzip 压缩。boolean 为类型，默认为 false
      open: false, // 启动且第一次构建完时自动用你系统上默认的浏览器去打开要开发的网页。
      stats: "errors-only", // 只展示错误信息，避免大量无用日志
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css",
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
      }),
      new CleanWebpackPlugin(),
    ],
  };
};
