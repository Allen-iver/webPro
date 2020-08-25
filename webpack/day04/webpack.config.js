const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 只会存在本次打包的文件
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, 
      //   // 通一个模块使用多个loader，顺序是从后往前的
      //   // 多个模块，将use变成数组
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      // {
      //   test: /\.md$/,
      //   // 直接使用相对路径
      //   use: [
      //     'html-loader',
      //     './markdown-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // 用于生成index.html 文件
    new HtmlWebpackPlugin({
      // title: 'html-webpack-plugin配置',
      // meta: {
      //   viewport: 'width=device-width'
      // }
      template: './src/index.html'
    }),
    // 用于生成about.html 文件
    new HtmlWebpackPlugin({
      filename: 'about.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        'public' // 需要拷贝的目录或者路径
      ]
    }),



  ]

}