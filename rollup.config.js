import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: './index.js',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'Blobby',
    file: 'dist/blobby.umd.js',
    format: 'umd',
    plugins: [terser()]
  },{
    name: 'Blobby',
    file: 'dist/blobby.es.js',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    vue({
      include: /\.vue$/,
    })
  ],
}
