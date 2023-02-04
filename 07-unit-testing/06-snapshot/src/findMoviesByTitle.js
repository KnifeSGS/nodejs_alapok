const movies = [
  { title: 'Flipper', emoji: ':D' },
  { title: 'Game of Thrones', emoji: ':(' },
  { title: 'Tenecious D', emoji: ':)' },
]

const findMoviesByTitle = title =>
  movies.filter(movie => movie.title.includes(title))

module.exports = findMoviesByTitle