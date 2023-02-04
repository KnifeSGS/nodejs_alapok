const { createReadStream, createWriteStream } = require('fs')
const { createGzip } = require('zlib')

const readableStream = createReadStream('./szamarmese.txt', {
  encoding: 'utf-8',
  highWaterMark: 11
})

const writeableStream = createWriteStream('./szamarmese_copy.txt')
const createCompressedFile = createWriteStream('./szamarmese.txt.gz')

readableStream.pipe(writeableStream)
readableStream
  .pipe(createGzip())
  .pipe(createCompressedFile)
