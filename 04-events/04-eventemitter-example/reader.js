const { readFile } = require('fs').promises

const reader = (eventEmitter) => {
  const readContent = async (file) => {
    console.log('reading process started\nFile:', file)
    try {
      const data = await readFile(file, 'utf-8')
      console.log('reading process ended succesfully')
      eventEmitter.emit('print', data)
    } catch (error) {
      eventEmitter.emit('error', error)
    }
  }

  const printContent = (content) => {
    console.log('Content: \n', content)
    eventEmitter.emit('close')
  }

  const errorHandler = (err) => {
    console.log('An error occured ', err.message)
  }

  const close = () => {
    console.log('Printing process done, app closed')
  }

  return {
    readContent,
    printContent,
    errorHandler,
    close
  }
}

module.exports = reader
