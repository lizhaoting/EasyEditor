const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const pathResolve = _path => path.resolve(__dirname, '../../', _path);

const PATHS = {
    entry: 'examples',
    public: 'examples/react',
    vueEntry: 'examples/vue',
    reactEntry: 'examples/react/index.js',
    template: 'examples/index.html',
    reactTemplate: 'examples/react/index.html'
}

module.exports = {
    entry: {
        index: pathResolve(PATHS.entry),
        react: pathResolve(PATHS.reactEntry),
        vue: pathResolve(PATHS.vueEntry),
    },
    devServer: {
        contentBase: pathResolve(PATHS.public),
        quiet: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Easy Editor Index',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            chunks: ['index'],
            template: pathResolve(PATHS.template),
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Easy Editor React',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            chunks: ['react'],
            template: pathResolve(PATHS.reactTemplate),
            filename: 'react.html'
        }),
        new HtmlWebpackPlugin({
            title: 'Easy Editor Vue',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            chunks: ['vue'],
            template: pathResolve(PATHS.reactTemplate),
            filename: 'vue.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-react"]
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loaders:{
                        css:ExtractTextPlugin.extract({
                            use:'css-loader',
                            fallback:'vue-style-loader'
                        })
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        alias: {
            'easy-editor-react': pathResolve('packages/easy-editor-react/src'),
            'easy-editor-utils': pathResolve('packages/easy-editor-utils/src'),
            'easy-editor-core': pathResolve('packages/easy-editor-core')
        }
    }
}