const yargs = require('yargs')
let movies = require('./database/movies')

// .command('get', 'Get all movies', () => console.log(movies))
yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command(
    {
      command: 'get',
      describe: 'Get all movies',
      handler: () => console.log(movies)
    })
  .command({
    command: 'find',
    describe: 'Find a movie by id',
    builder: {
      id: {
        alias: 'i',
        describe: 'Movie ID',
        type: 'number',
        demandOption: true
      }
    },
    handler: ({ id }) => console.log(movies.find(movie => movie.id === id))
  })
  .command(
    {
      command: 'create',
      describe: 'Create new movie',
      builder: {
        producer: {
          alias: 'p',
          describe: 'Film producer',
          type: 'string',
          demandOption: true
        },
        title: {
          alias: 't',
          describe: 'Movie title',
          type: 'string',
          demandOption: true
        }
      },
      handler: ({ producer, title }) => {
        const sortedMovies = [...movies].sort((a, b) => a.id > b.id)
        const id = sortedMovies[sortedMovies.length - 1].id + 1
        const movie = { id, title, producer }
        movies = [...movies, movie]
        console.log(movies.find(movie => movie.id === id))
      }
    }
  )
  .command(
    {
      command: 'edit',
      describe: 'Edit movie',
      builder: {
        id: {
          alias: 'i',
          describe: 'Movie ID',
          type: 'number',
          demandOption: true
        },
        producer: {
          alias: 'p',
          describe: 'Film producer',
          type: 'string',
          demandOption: true
        },
        title: {
          alias: 't',
          describe: 'Movie title',
          type: 'string',
          demandOption: true
        }
      },
      handler: ({ id, producer, title }) => {
        movies = movies.map(movie => movie.id === id ? { id, producer, title } : movie)
        console.log(movies.find(movie => movie.id === id))
      }
    }
  )
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
