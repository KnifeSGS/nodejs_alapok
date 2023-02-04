const { unlinkWrapper, renameWrapper, copyFileWrapper, statWrapper, chmodWrapper } = require('./utils')

// unlinkWrapper({ path: './szamarmese.txt' })
// renameWrapper({
//   oldPath: './poets.txt',
//   newPath: './POETS.txt'
// })
// copyFileWrapper({
//   src: './POETS.txt',
//   dest: './books/POETS.txt'
// })
statWrapper({
  path: './POETS.txt',
  callback(err, stats) {
    if (err) throw err
    console.log(stats)
  }
})
chmodWrapper({
  path: './POETS.txt',
  mode: 744
})
