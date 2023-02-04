const http = require('http')
const SiteRouter = require('./router/site.router')
const port = process.env.PORT || 8080

// http.createServer((req, res) => {
//   router[req.url] ? router[req.url](res) : router['/404'](res)
// }).listen(port)

http.createServer(({ url }, res) => {
  SiteRouter[url] ? SiteRouter[url](res) : SiteRouter['/404'](res)
})
  .on('error', err => console.log(`Server error: ${err.message}`))
  .on('listening', () => console.log(`Server running at http://127.0.0.1:${port}`))
  .listen(port)

// futtatás nodemonnal, hogy ne kelljen folyton restartolni módosítás után
// node .\server.js helyett nodemon .\server.js
// port megváltoztatása: set PORT=xxxx
