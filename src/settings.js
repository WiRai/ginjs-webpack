const path = require('path');

const PRODUCTLINE_DIR = process.env.PRODUCTLINE_DIR;
const context = require('ginjs').context;

const settings = {
  introduce_webpackConfig: {
    context: PRODUCTLINE_DIR,
    devtool: 'source-map',
    entry: ['./features/gap/entrypoint'],
    module: {
      loaders: [],
    },
    output: {
      path: path.join(context.DATA_DIR, 'dist'),
      filename: 'bundle.js',
    },
    plugins: [],
    resolve: {
      extensions: ['', '.js'],
    },
  },
};

module.exports = settings;
