const yargs = require('yargs')
const movies = require('./database/movies')

// .command('get', 'Get all movies', () => console.log(movies))
yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command({
    command: 'get',
    describe: 'Get all movies',
    handler: () => console.log(movies)
  })
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
