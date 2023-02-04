const { resolve, join } = require('path')

console.log(resolve()) // abszolút elérési út
console.log(join()) // összefűzésre, relatív útvonalat ad vissza
console.log(__dirname)

console.log(resolve('./szamarmese.txt'))
console.log(join(__dirname, './szamarmese.txt'))
