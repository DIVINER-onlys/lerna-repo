const parser = require('@babel/parser')
const {transformFromAstSync} = require('@babel/core')
const insertParametersPlugin = require('./plugin/parameters-insert-plugin')

const fs = require('fs')
const path = require('path')

const sourceCode = fs.readFileSync(path.join(__dirname, './sourceCode.js'), {
  encoding: 'utf-8',
})
// console.log('源码', sourceCode)

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous', // 自动判断源码中是否使用了module
  plugins: ['jsx'],
})
// console.log('抽象语法树', ast)

const {code, map} = transformFromAstSync(ast, sourceCode, {
  plugins: [insertParametersPlugin],
})

console.log('转换后源码', code)
console.log('sourceMap', map)
