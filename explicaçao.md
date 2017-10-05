## Webpack.config.js

var path = require('path');
var webpack = require('webpack');

var basePath = __dirname;

module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  entry: {
      app: './index.ts',
      vendor: [
        'react',
        'react-dom',
      ],
      vendorStyles: [
      './node_modules/bootstrap/dist/css/bootstrap.css',
      ],
  },
  output: {
    path: path.join(basePath, 'dist'),
    filename: '[chunkhash].[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 
          'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
        ],
      },
       //bootstrap
       {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
    ],
  },
};


