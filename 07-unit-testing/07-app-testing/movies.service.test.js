const { MoviesService } = require('./movies.service')
// kimokkuljuk a movies apit
const moviesApi = jest.createMockFromModule('./movies.api.js')
const movies = [{ id: 1, produce: 'Producer', title: 'Title' }]
moviesApi.get = jest.fn(() => movies)
moviesApi.save = jest.fn()
// beforeAll(() => {
// ez lehetne az iménti mockolás helyett
// })
const { findMovieById, createMovie, editMovie, removeMovie } = MoviesService(moviesApi)

describe('MoviesService', () => {
  test('findMovieById should return a movie', () => {
    expect(findMovieById(1)).toEqual(movies[0])
  })

  test('createMovie should return a new movie', () => {
    const payload = { producer: 'New Producer', title: "New Title" }
    expect(createMovie(payload)).toMatchObject(payload)
    expect(moviesApi.save).toBeCalled()
  })

  test('editMovie should return a modified movie', () => {
    const payload = { id: 1, producer: 'New Producer', title: "New Title" }
    expect(editMovie(payload)).toEqual(payload)
    expect(moviesApi.save).toBeCalled()
  })

  test('removeMovie should return undefined', () => {
    expect(removeMovie(1)).toBeUndefined()
    expect(moviesApi.save).toBeCalled()
  })
})