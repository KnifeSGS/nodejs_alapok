const yargs = require('yargs')
const {
  getAllMovies,
  findMovieById,
  createMovie,
  editMovie,
  removeMovie
} = require('./movie.service')

// .command('get', 'Get all movies', () => console.log(movies))
yargs
  .version('1.0.0')
  .usage('Usage: <command> [options]')
  .command(
    {
      command: 'get',
      describe: 'Get all movies',
      handler: () => console.log(getAllMovies())
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
    handler: ({ id }) => console.log(findMovieById(id))
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
        console.log(createMovie(producer, title))
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
        console.log(editMovie(id, producer, title))
      }
    }
  )
  .command({
    command: 'remove',
    describe: 'Remove a movie by id',
    builder: {
      id: {
        alias: 'i',
        describe: 'Movie ID',
        type: 'number',
        demandOption: true
      }
    },
    handler: ({ id }) => {
      removeMovie(id)
      console.log(`Movie with ID"${id}" deleted`)
    }
  })
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
