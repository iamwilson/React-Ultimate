const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: []

};