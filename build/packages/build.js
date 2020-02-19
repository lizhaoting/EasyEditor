import { rollup } from 'rollup';
import config from './rollup.config';

// rollup(config);

// console.log('config', config[0])

// see below for details on the options
// const inputOptions = config;
// const outputOptions = {
//     file: 'bundle',   // 若有bundle.write，必填
//     format: 'umd'
// };

async function build(inputOptions) {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  // const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  // await bundle.write(outputOptions);
}
build(config[0])
// config.map(option => build(option));