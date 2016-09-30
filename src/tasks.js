const webpack = require('webpack');

module.exports = {
  introduce_webpackBuild: () => {
    // eslint-disable-next-line global-require, import/no-unresolved
    const settings = require('ginjs').settings;

    const compiler = webpack(settings.webpackConfig);
    compiler.run((err: Array, stats: Array) => {
      if (err) {
        throw err;
      }
      const jsonStats = stats.toJson();
      if (stats.hasErrors()) {
        // eslint-disable-next-line no-console
        console.log('There have been errors:');
        // eslint-disable-next-line no-console
        jsonStats.errors.forEach((elem: String): void => console.log(elem));
        return;
      }
      if (stats.hasWarnings()) {
        // eslint-disable-next-line no-console
        console.log('There have been warnings:\n');
        // eslint-disable-next-line no-console
        jsonStats.warnings.forEach((elem: String): void => console.log(elem));
        return;
      }
      // eslint-disable-next-line no-console
      console.log('Compiled successfully');
    });
  },
};
