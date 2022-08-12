const {transformFromAstSync} = require('@babel/core')
const parser = require('@babel/parser')
const reactBoundaryPlugin = require('./plugin/react_boundary')

const fs = require('fs')
const path = require('path')

const sourceCode = fs.readFileSync(path.join(__dirname, './code/code1.jsx'), {
  encoding: 'utf-8',
})
// console.log('源码', sourceCode)

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous', // 自动判断源码中是否使用了module
  plugins: ['jsx'],
})
// console.log('抽象语法树', ast)

const {code} = transformFromAstSync(ast, sourceCode, {
  plugins: [reactBoundaryPlugin],
})

console.log('转换后的code:')
console.log(code)
