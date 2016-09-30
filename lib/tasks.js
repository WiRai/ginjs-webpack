'use strict';

var webpack = require('webpack');

module.exports = {
  introduce_webpackBuild: function introduce_webpackBuild() {
    // eslint-disable-next-line global-require, import/no-unresolved
    var settings = require('ginjs').settings;

    var compiler = webpack(settings.webpackConfig);
    compiler.run(function (err, stats) {
      if (err) {
        throw err;
      }
      var jsonStats = stats.toJson();
      if (stats.hasErrors()) {
        // eslint-disable-next-line no-console
        console.log('There have been errors:');
        // eslint-disable-next-line no-console
        jsonStats.errors.forEach(function (elem) {
          return console.log(elem);
        });
        return;
      }
      if (stats.hasWarnings()) {
        // eslint-disable-next-line no-console
        console.log('There have been warnings:\n');
        // eslint-disable-next-line no-console
        jsonStats.warnings.forEach(function (elem) {
          return console.log(elem);
        });
        return;
      }
      // eslint-disable-next-line no-console
      console.log('Compiled successfully');
    });
  }
};