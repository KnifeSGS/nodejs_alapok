const generateItems = require('../src/generateItems')

test('generateItems call callback count of items times', () => {
  const mockCallback = jest.fn(x => x * 2)
  // ha csak az érdekel lefut-e:
  // const mockCallback = jest.fn()
  const arr = [1, 2]
  // const actual = generateItems(arr, mockCallback)
  generateItems(arr, mockCallback)
  // const expected = [2, 4]
  // expect(actual).toEqual(expected)
  // meghívódott -e a callback 
  expect(mockCallback).toHaveBeenCalled()
  // ()-ben hogy hányszor
  expect(mockCallback).toHaveBeenCalledTimes(2)
  // amikor először fut le, a visszatérési elem 2
  expect(mockCallback.mock.results[0].value).toBe(2)
  // amikor másodszor fut le, a visszatérési elem 4
  expect(mockCallback.mock.results[1].value).toBe(4)
})