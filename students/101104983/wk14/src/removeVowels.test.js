const removeVowels = require('./removeVowels')

describe("Remove vowels function", () => {
    test("It should take all the vowels out from a string", () => {
        const input = "A dog is a friendly pet if it’s trained properly"

        const output = ' dg s  frndly pt f t’s trnd prprly' 
        expect(removeVowels(input)).toEqual(output)
    })
})