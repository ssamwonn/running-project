const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

// For Typescript
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  module: process.env.NODE_ENV,
  entry: {
    // For Typescript
    "js/app": ["./App.tsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },
  module: {
    rules: [
      // For Typescript
      {
        test: /\.(ts|tsx)$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    // For typescript
    new ForkTsCheckerWebpackPlugin(),
  ],
};
