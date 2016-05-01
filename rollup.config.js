import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';

const config = {
    entry: 'src/js/index.js',
    dest: 'build/js/index.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
      nodeResolve({ jsnext: true, main: true }),
      commonJS(),
      buble(),
      uglify()
    ]
};

export default config;
