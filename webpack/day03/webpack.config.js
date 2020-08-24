const path = require('path')


module.exports = {
  entry: './src/main.css',

  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/, 
        use: 'css-loader'
      }
    ]
  }

}