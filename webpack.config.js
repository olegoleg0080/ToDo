const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ... existing Webpack configuration

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // Добавьте "/" в publicPath
  },

  devServer: {
    historyApiFallback: true, // Добавьте historyApiFallback
    contentBase: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    // ... existing plugins

    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify('/') // Добавьте process.env.PUBLIC_URL
    })
  ]
};