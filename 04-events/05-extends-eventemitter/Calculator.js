const EventEmitter = require('events')

class Calculator extends EventEmitter {
  sum(a, b) {
    this.emit('start')
    console.log('Working in progress')
    this.emit('end', a + b)
  }
}

module.exports = Calculator
