const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    source: path.join(__dirname, 'src'),
    target: path.join(__dirname, 'dist'),
}

module.exports = {
  entry: PATHS.source + '/index.js',
  output: {
    filename: 'main.js',
    path: PATHS.target,
  },

  plugins: [
    new HtmlWebpackPlugin({title: 'Webpack app'})
  ]

};