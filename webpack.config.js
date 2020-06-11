const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  source: path.join(__dirname, 'src'),
  target: path.join(__dirname, 'dist'),
}

const commonConfig = {
  entry: PATHS.source + '/index.js',
  output: {
    filename: 'main.js',
    path: PATHS.target,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: PATHS.source + '/index.pug' })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  }
};

const devConfig = {
  devServer: {
    stats: 'errors-only',
    port: 9000
  }
}

module.exports = function(env){
  if (env === 'production')
    return commonConfig;
  if (env === 'development')
    return Object.assign({}, commonConfig, devConfig);
}