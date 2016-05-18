require('babel-core/register');
//var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

var imageLoader = require('./gallery/loader');
var GalleryPlugin = require('./gallery/plugin');

module.exports = [
  {
    devtool: 'source-map',
    entry: {
      main: './index.js'
    },
    output: {
      path: './build',
      filename: 'bundle.js'
    },
    module: {
      loaders:[
        {
          test: /.js$/,
          loader:'babel-loader',
          exclude:/node_modules/,
          query: {
            presets:['es2015', 'react']
          }
        },
        {
          test: /.scss$/,
          loaders: ['style','css','sass']
        }
      ]
    },
    plugins: [
      new GalleryPlugin({ folder:'./engagement/photos' })
      //new ExtractTextPlugin("[name].css")
    ]
  }
];
