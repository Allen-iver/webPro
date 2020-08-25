// 函件必须是一个函数,用钩子挂载后可使用

// const { compilation } = require("webpack")
class RemoveCommentsPlugin {
  apply(compiler) {
    console.log('RemoveCommentsPlugin??')
    // compiler => 包含了我们此次构建的所有配置信息
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation=>可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        console.log(name) // 输出文件名称
      }

    })

  }

}