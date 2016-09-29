const webpack = require('webpack');

module.exports = {
  introduce_webpackBuild: () => {
    const settings = require('ginjs').settings;
    const compiler = webpack(settings.webpackConfig);
    compiler.run((err, stats) => {
      if(err) {
        throw err;
      }
      const jsonStats = stats.toJson();
      if(stats.hasErrors()) {
        console.log('There have been errors:');
        jsonStats.errors.forEach(elem => console.log(elem));
        return;
      }
      if(stats.hasWarnings()) {
        console.log('There have been warnings:\n');
        jsonStats.warnings.forEach(elem => console.log(elem));
        return;
      }
      console.log('Compiled successfully');
    });
  }
};
