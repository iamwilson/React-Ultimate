const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    stats: {
      hash: false,
      modules: false,
      version: false,
      timings: false,
      builtAt: false,
      excludeAssets: /\.(woff2?|ttf|eot|map)$/
    }
  },
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: ['ts-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: ['file-loader']
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader?name=assets/images/[name].[ext]'
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.(woff2?)$/,
        loader: 'file-loader?prefix=font/&limit=5000&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml&name=assets/svgs/[name].[ext]'
      }
    ]
  },
  
  output: {
    publicPath: '',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new htmlWebpackPlugin({
      "template": "./src/index.html",
      "filename": "./index.html"
    })
  ],

  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx']
  },

  target: 'web'

}