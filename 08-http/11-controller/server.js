const http = require('http')
const SiteRouter = require('./router/site.router')
const port = 8080

// http.createServer((req, res) => {
//   router[req.url] ? router[req.url](res) : router['/404'](res)
// }).listen(port)

http.createServer(({ url }, res) => {
  SiteRouter[url] ? SiteRouter[url](res) : SiteRouter['/404'](res)
}).listen(port)

console.log(`Server is running at http://127.0.0.1:${port}`)
