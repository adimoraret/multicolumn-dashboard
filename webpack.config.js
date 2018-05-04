const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function (env) {

  const baseConfiguration = {
    entry: {
      'dashboard': './app/dashboard/dashboard.js',
    },
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].js",
      publicPath: "/dist/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: [/\.scss$/],
          use: [{
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }]
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, '.'),
      publicPath: '/dist/',
      watchContentBase: true, //true to watch static content.
      hot: true,
      overlay: true
    },
    plugins: [
      new CleanWebpackPlugin(['./dist']),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  };

  return baseConfiguration;
}