import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  entry: 'src/string-dom.js',
  plugins: [
    resolve(),
    babel()
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'StringDom'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
