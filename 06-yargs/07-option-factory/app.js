const yargs = require('yargs')
const { id, producer, title } = require('./option')
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
    builder: { id },
    handler: ({ id }) => console.log(findMovieById(id))
  })
  .command(
    {
      command: 'create',
      describe: 'Create new movie',
      builder: { producer, title },
      handler: ({ producer, title }) => {
        console.log(createMovie(producer, title))
      }
    }
  )
  .command(
    {
      command: 'edit',
      describe: 'Edit movie',
      builder: { id, producer, title },
      handler: ({ id, producer, title }) => {
        console.log(editMovie(id, producer, title))
      }
    }
  )
  .command({
    command: 'remove',
    describe: 'Remove a movie by id',
    builder: { id },
    handler: ({ id }) => {
      removeMovie(id)
      console.log(`Movie with ID"${id}" deleted`)
    }
  })
  .locale('en')
  .strict()
  .help()
  .parse() // process.argv
