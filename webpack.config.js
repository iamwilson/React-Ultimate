const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: ["ts-loader"] },
      { test: /\.(jpe?g|png|gif)$/, loader: ['file-loader'] },    
      { test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  },

  plugins: []
};