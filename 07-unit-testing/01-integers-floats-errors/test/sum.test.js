const sum = require('../src/sum')

test('sum 1+2 should be 3', () => {
  const actual = sum(1, 2)
  const expected = 3
  expect(actual).toBe(expected)
})

test('sum 0.1 + 0.2 should be close to 0.3', () => {
  const actual = sum(0.1, 0.2)
  const expected = 0.3
  expect(actual).toBeCloseTo(expected)
})

test('sum give an error an Error if one or more parameters are not finite numbers', () => {
  const wrongParameters = [null, undefined, NaN, '', Infinity]
  wrongParameters.forEach(parameter => {
    expect(() => sum(1, parameter)).toThrow()
  })
})