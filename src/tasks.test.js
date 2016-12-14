const expect = require('chai').expect; // eslint-disable-line import/no-extraneous-dependencies
const fs = require('fs-extra'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');
const os = require('os');
let tasks = require('ginjs').tasks;

// dummy test
describe('webpackBuild introducement', () => { // eslint-disable-line no-undef
  it('Bundle bundle.js', () => { // eslint-disable-line no-undef
    process.env.PRODUCTLINE_DIR = path.join(os.tmpdir(), '_ginjs-test-productline');
    process.env.PATH = `${process.env.PRODUCTLINE_DIR}/node_modules/.bin:${process.env.PATH}`;
    process.env.NODE_PATH = `${process.env.PRODUCTLINE_DIR}/features:${process.env.PRODUCTLINE_DIR}/node_modules:${process.env.NODE_PATH}`;
    // Tp be sure new NODE_PATH is used:
    require('module').Module._initPaths(); // eslint-disable-line no-underscore-dangle, global-require
    process.chdir(os.tmpdir());
    tasks.createProductLine('_ginjs-test-productline');
    process.env.PRODUCT_DIR = path.join(process.env.PRODUCTLINE_DIR, 'products', 'default');
    fs.writeJSONSync(path.join(process.env.PRODUCT_DIR, 'features.json'), [
      'ginjs',
      require.resolve('../index'), // ginjs-webpack
      'gap',
    ]);
    /*
     * Reset tasks module because require tasks forces composition
     * of tasks module, but we add features later dynamically.
     * To get those features composed we need this pattern...
     */
    Object.keys(require.cache).forEach((elem: string) => {
      delete require.cache[elem];
    });
    tasks = require('ginjs').tasks; // eslint-disable-line global-require
    expect(// eslint-disable-line no-unused-expressions
      typeof tasks.webpackBuild === 'function',
    ).to.be.true;
    fs.removeSync(process.env.PRODUCTLINE_DIR);
    delete process.env.PRODUCTLINE_DIR;
    delete process.env.PRODUCT_DIR;
    Object.keys(require.cache).forEach((elem: string) => {
      delete require.cache[elem];
    });
  });
});
