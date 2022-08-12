// 导入 webpack-chain 模块，该模块导出了一个用于创建一个webpack配置API的单一构造函数。
const Config = require('webpack-chain')
const path = require('path')

// 对该单一构造函数创建一个新的配置实例
const config = new Config()

// console.log('改变前config', config)

config
  // 修改entry配置
  .entry('index')
  .add('./src/index.js')
  .end()
  // 修改output配置
  .output.path(path.resolve(__dirname, 'dist'))
  .filename('[name].[hash].bundle.js')

// console.log('改变后config', config)

module.exports = config.toConfig()
