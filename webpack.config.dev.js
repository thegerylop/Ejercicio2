var path = require('path');
var commonConfig = require('./webpack.config.base');
var webpackMerge = require('webpack-merge');

var basePath = __dirname;

module.exports = function(){
  return  webpackMerge(commonConfig,{
    output: {
      path: path.join(basePath, 'dist'),
      filename: '[name].js',
    },
    devServer:{
      port:8080,
    },
  });
}


