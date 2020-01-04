const checkFlag = require('../defaultParams').checkFlag
const multiply = require('../defaultParams').multiply

// checkFlag test cases
test('should accept a default param, true or false', () => {
  expect(checkFlag()).toBe(undefined)
})

test('should accept a default param, when true console log', () => {
  expect(checkFlag(true)).toBe('The flag passed was true')
})

// multiple test cases
test('should multiply 5 * 2 as 10', () => {
  expect(multiply(5, 2)).toBe(10)
})

test('should multiply 5 by the default param (10)', () => {
  expect(multiply(5)).toBe(50)
})

test('should multiply by the default when undefined is passed', () => {
  expect(multiply(10, undefined)).toBe(100)
})
