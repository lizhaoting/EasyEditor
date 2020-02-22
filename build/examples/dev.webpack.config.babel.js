import path from 'path';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathResolve = _path => path.resolve(__dirname, '../../', _path);

const PATHS = {
    entryPath: 'examples/main.js',
    publicPath: 'examples',
    templatePath: 'examples/index.html'
}

module.exports = {
    entry: pathResolve(PATHS.entryPath),
    devServer: {
        contentBase: pathResolve(PATHS.publicPath),
        quiet: true,
        hot:true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Easy Editor',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            template: pathResolve(PATHS.templatePath),
        }),
    ]
}