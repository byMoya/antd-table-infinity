const presets = ['@babel/react'];
const plugins = [
  // Stage 0
  '@babel/plugin-proposal-function-bind',

  // Stage 1
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-logical-assignment-operators',
  ['@babel/plugin-proposal-optional-chaining', { loose: false }],
  ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ['@babel/plugin-proposal-nullish-coalescing-operator', { loose: false }],
  '@babel/plugin-proposal-do-expressions',

  // Stage 2
  ['@babel/plugin-proposal-decorators', { legacy: true }],
  '@babel/plugin-proposal-function-sent',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-numeric-separator',
  '@babel/plugin-proposal-throw-expressions',

  // Stage 3
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  ['@babel/plugin-proposal-class-properties', { loose: false }],
  '@babel/plugin-proposal-json-strings',
];
const options = {
  cjs: {
    modules: 'cjs',
  },
  es: {
    modules: false,
  },
  umd: {
    modules: 'umd',
  },
};
presets.unshift([
  '@babel/preset-env',
  {
    ...options[process.env['BABEL_ENV']],
    targets: { esmodules: true },
  },
]);
module.exports = { presets, plugins };