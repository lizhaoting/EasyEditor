import { rollup } from 'rollup';
import config from './rollup.config';
import path from 'path';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'
import uglify from "rollup-plugin-uglify";

const pathResolve = _path => path.resolve(__dirname, '../../', _path);
// rollup(config);

// console.log('config', config[0])

// see below for details on the options
// const inputOptions = config;
// const outputOptions = {
//     file: 'bundle',   // 若有bundle.write，必填
//     format: 'umd'
// };

async function build(inputOptions, outputOptions) {
    // create a bundle
    // console.log('inputOptions', JSON.stringify(inputOptions))

    // Allowed options: acorn, acornInjectPlugins, cache, chunkGroupingSize, context, experimentalCacheExpiry, experimentalOptimizeChunks, external, inlineDynamicImports, input, manualChunks, moduleContext, onwarn, perf, plugins, preserveModules, preserveSymlinks, shimMissingExports, strictDeprecations, treeshake, watch
    const bundle = await rollup(inputOptions);

    // console.log('bundle.imports', bundle.imports); // an array of external dependencies
    // console.log('bundle.exports', bundle); // an array of names exported by the entry point
    // console.log('bundle.modules', bundle); // an array of module objects

    // generate code and a sourcemap
    const { code, map } = await bundle.generate(outputOptions);
    console.log('code', code)

    // or write the bundle to disk
    await bundle.write(outputOptions);
}
build(
    {
        input: pathResolve('packages/easy-editor/src/index.js'),
        plugins: [
            resolve(),
            commonjs(),
            // babel({
            //     exclude: 'node_modules/**',
            // }),
            // uglify()
        ]
    },
    {
        file: 'dist/bundle.js'
    }
)
// config.map(option => build(option));