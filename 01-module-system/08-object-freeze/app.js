const utils = require('./utils')

const priceList = [234, 423, 4265, 6456, 3245]

utils.even = 2
utils.odd = 1

console.log(utils)
console.log(utils.even(priceList))

utils.users.age = 18

console.log(utils.users)

// csak a lgfelsőbb szintet freezeli, a belsőt már nem
