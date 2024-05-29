import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';
import { dts } from 'rollup-plugin-dts';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'validateCurp',
      sourcemap: true,
    },
    plugins: [
      commonjs(),
      json(),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/env'],
      }),
      terser(),
    ],
  },
  {
    input: 'src/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];
