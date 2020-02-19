import path from 'path';

const resolve = _path => path.resolve(__dirname, '../../', _path);

export default [
    {
      name: 'easy-editor',
      outputName: 'easy-editor',
      package: resolve('packages/easy-editor/package.json'),
      input: resolve('packages/easy-editor/src/index.js'),
      file: resolve('packages/easy-editor/dist/easy-editor.js'),
      format: 'umd',
      env: 'production',
    },
]