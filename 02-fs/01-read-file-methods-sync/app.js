const fs = require('fs')

const data = fs.readFileSync('./szamarmese.txt', { encoding: 'utf-8' })
// const data = fs.readFileSync('./02-fs/01-read-file-methods/szamarmese.txt')
console.log(data)
