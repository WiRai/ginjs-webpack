'use strict';

var path = require('path');

var PRODUCTLINE_DIR = process.env.PRODUCTLINE_DIR;
var context = require('ginjs').context;

var settings = {
  introduce_webpackConfig: {
    context: PRODUCTLINE_DIR,
    devtool: 'source-map',
    entry: ['./features/gap/entrypoint'],
    module: {
      loaders: []
    },
    output: {
      path: path.join(context.DATA_DIR, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [],
    resolve: {
      extensions: ['', '.js']
    }
  }
};

module.exports = settings;