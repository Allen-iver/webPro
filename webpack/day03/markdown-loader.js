// ./markdown-loader.js
const marked = require('marked')
module.exports = source => {
  console.log(source);
  // 第一种方法 直接在markdown-loader里面转换

  // 1.将markdown转换为html字符串
  const html = marked(source)
  console.log(html);
  // 2.将html字符串拼接为一段导出字符串的JS代码
  // const code = `module.exports=${JSON.stringify(html)}`
  // const code = `export default=${JSON.stringify(html)}`
  // return code

  // 第二种方法 直接将source marked之后 return, 然后安装配置 html-loader;
  return html

}




