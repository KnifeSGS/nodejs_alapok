const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter()

const scream = () => console.log('I hear a scream')
const toLateToHelp = () => console.log('To late to help')
const describeTheMurderer = ({ height, hairColor }) =>
  console.log(`Height: ${height}, Hair color: ${hairColor}`)

eventEmitter.on('scream', scream)
eventEmitter.on('scream', toLateToHelp)
eventEmitter.once('witness', describeTheMurderer)

eventEmitter.emit('scream')
eventEmitter.emit('scream')
eventEmitter.emit('witness', { height: '180cm', hairColor: 'black' })
eventEmitter.emit('witness', { height: '180cm', hairColor: 'black' })
eventEmitter.off('scream', toLateToHelp)
eventEmitter.emit('scream')
