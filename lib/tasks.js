'use strict';

var webpack = require('webpack');

module.exports = {
  introduce_webpackBuild: function introduce_webpackBuild() {
    var settings = require('ginjs').settings;
    var compiler = webpack(settings.webpackConfig);
    compiler.run(function (err, stats) {
      if (err) {
        throw err;
      }
      var jsonStats = stats.toJson();
      if (stats.hasErrors()) {
        console.log('There have been errors:');
        jsonStats.errors.forEach(function (elem) {
          return console.log(elem);
        });
        return;
      }
      if (stats.hasWarnings()) {
        console.log('There have been warnings:\n');
        jsonStats.warnings.forEach(function (elem) {
          return console.log(elem);
        });
        return;
      }
      console.log('Compiled successfully');
    });
  }
};