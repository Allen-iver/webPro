const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        // 通一个模块使用多个loader，顺序是从后往前的
        // 多个模块，将use变成数组
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.md$/,
        // 直接使用相对路径
        use: [
          'html-loader',
          './markdown-loader'
        ]
      }
    ]
  }

}