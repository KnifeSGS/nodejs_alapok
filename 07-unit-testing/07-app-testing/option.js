const Option = ({ alias, describe, type = 'string', demandOption = true } = {}) => ({
  alias, describe, type, demandOption
})

const id = Option({
  alias: 'i',
  describe: 'Movie ID',
  type: 'number'
})

const producer = Option({
  alias: 'p',
  describe: 'Film producer',
  type: 'string'
})

const title = Option({
  alias: 't',
  describe: 'Movie title',
  type: 'string'
})

module.exports = Object.freeze({
  id,
  producer,
  title
})
