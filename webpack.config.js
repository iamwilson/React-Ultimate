const path = require("path");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "./src/index.tsx"],
  output: {
    publicPath: "dist",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: ["ts-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: ['file-loader']
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },

  plugins: []
};