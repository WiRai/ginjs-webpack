const path = require('path');
const featurePath = path.join(process.env.PRODUCTLINE_DIR, 'features', 'gap');

const settings = {
  introduce_webpackConfig: {
    context: featurePath,
    devtool: 'source-map',
    entry: ['./entrypoint'],
    module: { 
      loaders: [],
    },
    output: {
      path: path.join(featurePath, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [],
    resolve: {
      extensions: ['', '.js'],
    },
  },
};

module.exports = settings;
