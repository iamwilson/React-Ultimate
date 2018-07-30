const path = require("path");

module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  }, // Tells Typescript to resolve the extensions thus we don't have to specify them on the import statements
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