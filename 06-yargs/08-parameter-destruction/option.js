const option = ({ alias, describe, type = 'string', demandOption = true } = {}) => ({
  alias, describe, type, demandOption
})

const id = option({
  alias: 'i',
  describe: 'Movie ID',
  type: 'number'
})

const producer = option({
  alias: 'p',
  describe: 'Film producer',
  type: 'string'
})

const title = option({
  alias: 't',
  describe: 'Movie title',
  type: 'string'
})

module.exports = Object.freeze({
  id,
  producer,
  title
})
