import path from 'path';

const pathResolve = _path => path.resolve(__dirname, '../../', _path);

module.exports = {
    entry: pathResolve('examples/main.js'),
    devServer: {
        contentBase: pathResolve('examples/'),
        quiet: true
    }
}