const multiplyByLastEvenNumber = require('./multiplyByLastEvenNumber')

describe('multiplyByLastEvenNumber function', ()=>{
    test('takes array, for ever odd integer multiplies by the previous even element, returns new array of calculated values', ()=>{
        const input = [2,33,4,41,6,9,77,11,13,27];

        const output= [66, 164, 54, 462, 66, 78, 162]

        expect(multiplyByLastEvenNumber(input)).toEqual(output);
    });
});