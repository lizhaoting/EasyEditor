import { rollup } from 'rollup';
import config from './rollup.config';

async function build(inputOptions, outputOptions) {
    const bundle = await rollup(inputOptions);

    const { code, map } = await bundle.generate(outputOptions);

    await bundle.write(outputOptions);
}

build(config.input, config.output)