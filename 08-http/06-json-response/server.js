const http = require('http')
const port = 8080
// ez szinkron lesz így kessel és a változás nem fog látszani
const movies = require('./movies')

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(JSON.stringify(movies))
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
