// const fsp = require('fs').promises
const { readFile } = require('fs').promises

const readFileWrapper = async (file, options = {}) => {
  try {
    // const result = await fsp.readFile(file, options)
    const result = await readFile(file, options)
    console.log('target: ', result)
  } catch (err) {
    console.log(err)
  }
}

module.exports = Object.freeze({
  readFileWrapper
})
