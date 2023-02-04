const http = require('http')
const { createReadStream } = require('fs')

const port = 8080

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  createReadStream('./movies.json').pipe(res)
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
