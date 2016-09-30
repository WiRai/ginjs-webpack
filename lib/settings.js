'use strict';

var path = require('path');

var featurePath = path.join(process.env.PRODUCTLINE_DIR, 'features', 'gap');

var settings = {
  introduce_webpackConfig: {
    context: featurePath,
    devtool: 'source-map',
    entry: ['./entrypoint'],
    module: {
      loaders: []
    },
    output: {
      path: path.join(featurePath, 'dist'),
      filename: 'bundle.js'
    },
    plugins: [],
    resolve: {
      extensions: ['', '.js']
    }
  }
};

module.exports = settings;