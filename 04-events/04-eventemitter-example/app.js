const reader = require('./reader')
const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

const { readContent, printContent, errorHandler, close } = reader(eventEmitter)

eventEmitter.on('read', readContent)
eventEmitter.on('print', printContent)
eventEmitter.on('close', close)
eventEmitter.on('error', errorHandler)

eventEmitter.emit('read', './szamarmese.txt')
