var a = require('./a.js')
console.log(a) // ''
console.log(123); // 123
setTimeout(() => console.log(a), 1000) // ''

  