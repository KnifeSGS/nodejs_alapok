const Bluebird = require('bluebird')
const fs = Bluebird.promisifyAll(require('fs'))

const truncateAndPrintFile = async (file, length, bufferSize) => {
  const fd = await fs.openAsync(file, 'r+')
  await fs.ftruncateAsync(fd, length)
  const buffer = Buffer.alloc(bufferSize)
  const bytes = await fs.readAsync(fd, buffer, 0, buffer.length, 0)
  if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
  await fs.closeAsync(fd)
}

module.exports = Object.freeze({
  truncateAndPrintFile
})
