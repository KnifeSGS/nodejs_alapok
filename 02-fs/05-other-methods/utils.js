const { unlink, rename, copyFile, stat, chmod } = require('fs')

const fileHandlerCallback = (err) => {
  if (err) throw err
  console.log('file processed succesfull')
}

const unlinkWrapper = ({ path, callback = fileHandlerCallback }) => {
  unlink(path, callback)
}

const renameWrapper = ({ oldPath, newPath, callback = fileHandlerCallback }) => {
  rename(oldPath, newPath, callback)
}

const copyFileWrapper = ({ src, dest, callback = fileHandlerCallback }) => {
  copyFile(src, dest, callback)
}

const statWrapper = ({ path, callback = fileHandlerCallback }) => {
  stat(path, callback)
}

const chmodWrapper = ({ path, mode, callback = fileHandlerCallback }) => {
  chmod(path, mode, callback)
}
// mode = tulajdonos, csoport többi tagja, egyéb userek jogosultságai
// READ: 4, WRITE: 2, EXECUTE: 1 : tehát minden jogosultság mindenkinek = 777

module.exports = Object.freeze({
  unlinkWrapper,
  renameWrapper,
  copyFileWrapper,
  statWrapper,
  chmodWrapper
})
