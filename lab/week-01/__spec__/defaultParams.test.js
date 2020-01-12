const es6 = require('../es6')

// checkFlag test cases
test('should accept a default param, true or false', () => {
  expect(es6.checkFlag()).toBe('The flag passed was true')
})

test('should accept a default param, when true console log', () => {
  expect(es6.checkFlag(true)).toBe('The flag passed was true')
})

// multiple test cases
test('should es6.multiply 5 * 2 as 10', () => {
  expect(es6.multiply(5, 2)).toBe(10)
})

test('should es6.multiply 5 by the default param (10)', () => {
  expect(es6.multiply(5)).toBe(50)
})

test('should es6.multiply by the default when undefined is passed', () => {
  expect(es6.multiply(10, undefined)).toBe(100)
})
