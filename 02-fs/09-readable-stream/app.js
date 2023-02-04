const { createReadStream } = require('fs')

const readableStream = createReadStream('./szamarmese.txt', {
  encoding: 'utf-8',
  highWaterMark: 11
})

readableStream.on('data', (chunk) => {
  // console.log(chunk)
  process.stdout.write(chunk)
})
