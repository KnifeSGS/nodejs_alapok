const fs = require('fs')

// szinkron
const readFileSyncLog = (path, options = {}) => {
  const data = fs.readFileSync(path, options)
  console.log(data)
}

// aszinkron
const readFileLog = (path, options = {}) => {
  fs.readFile(path, options,
    (err, data) => {
      if (err) {
        throw err
      } else {
        console.log(data)
      }
    })
}

module.exports = Object.freeze({
  readFileLog,
  readFileSyncLog
})
