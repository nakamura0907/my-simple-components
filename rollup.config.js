import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';

const dts = require("rollup-plugin-dts").default;
const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
                name: 'my-simple-components'
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig-build.json' }),
            terser()
        ],
        
    },
    {
        input: 'lib/esm/types/index.d.ts',
        output: [{ file: 'lib/index.d.ts', format: "esm" }],
        plugins: [dts()],
    }
]