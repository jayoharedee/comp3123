const removeFalseValue = require('./removeFalseValue')

describe('remove false value function',()=>{
    test('function should filter the object array of false values in authenticated field', ()=>{
        const input = [
            {id:1, authenticated: true},
            {id:2, authenticated: false},
            {id:3, authenticated: true},
            {id:4, authenticated: false},
            {id:5, authenticated: true},
        ];

        const output = [
            { id: 1, authenticated: true },
            { id: 3, authenticated: true },
            { id: 5, authenticated: true }
          ]

          expect(removeFalseValue(input)).toEqual(output);
    })
})