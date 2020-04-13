const multiplyEvens = require('./multiplyEvens') 

describe('Multiply even numbers', () => {
    test('It should return odd numbers mulplied by the previous even number', () => {
        const input = [ 2, 33, 4, 41, 6, 9, 77, 11, 13, 27 ]
        const output = [ 66, 164, 54, 462, 66, 78, 162 ]
        expect(multiplyEvens(input)).toEqual(output)
    })
})