const authFalse = require('./authFalse')

describe('filter auth false function', () => {
    test('It should filter out objs with authenticated = false', () => {
        const input = [
            {id: 1, authenticated: false},
            {id: 2, authenticated: true},
            {id: 3, authenticated: true},
            {id: 4, authenticated: false},
            {id: 5, authenticated: true}
        ]
        const output = [{id: 2, authenticated: true}, {id: 3, authenticated: true}, {id: 5, authenticated: true}]
        expect(authFalse(input)).toEqual(output)
    })
})