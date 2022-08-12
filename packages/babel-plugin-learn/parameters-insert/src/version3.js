const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generate = require('@babel/generator').default
const types = require('@babel/types')
const template = require('@babel/template')

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

const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`)
traverse(ast, {
  CallExpression(path, state) {
    if (path.node.isNew) {
      return
    }
    const calleeName = path.get('callee').toString()
    if (targetCalleeName.includes(calleeName)) {
      const {line, column} = path.node.loc.start
      const newNode = template.expression(`console.log("filename: (${line}, ${column})")`)()
      newNode.isNew = true

      if (path.findParent(path => path.isJSXElement())) {
        path.replaceWith(types.arrayExpression([newNode, path.node]))
        path.skip()
      } else {
        path.insertBefore(newNode)
      }
    }
  },
})

const {code, map} = generate(ast)
console.log('转换后源码', code)
console.log('sourceMap', map)
