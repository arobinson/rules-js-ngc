const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  preserveEntrySignatures: false,
  plugins: [
    nodeResolve({
      mainFields: ['browser', 'es2015', 'module', 'jsnext:main', 'main']
    }),
    commonjs()
  ]
};
