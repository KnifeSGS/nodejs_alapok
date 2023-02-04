const fileHandlerWrapper = ({ method, path, data, callback = fileHandlerCallback } = {}) => {
  method(path, data, callback)
}

const fileHandlerCallback = (err) => {
  if (err) throw err
  console.log('file processed succesfull')
}

module.exports = Object.freeze({
  fileHandlerWrapper
})
