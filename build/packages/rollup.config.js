import path from 'path';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

const pathResolve = _path => path.resolve(__dirname, '../../', _path);

const packageList = [
  {
    path: 'packages/easy-editor',
    name: 'easy-editor'
  }
]

const input = {
  input: pathResolve('packages/easy-editor/src/index.js'),
  plugins: [
      nodeResolve(),
      commonjs(),
      babel({
          exclude: 'node_modules/**',
          babelrc: false,
          presets: ['@babel/preset-env'],
      })
    ]
};

const output = {
  file: pathResolve('packages/easy-editor/dist/bundle.js'),
  name: 'easy-editor',
  format: 'umd',
  plugins: [
      uglify()
  ]
};

export default { input, output }