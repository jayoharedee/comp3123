const removeVowels = require('./removeVowels')

describe("Remove vowels function", ()=>{
    test("function should remove vowels from string (aeiouy)",()=>{
        const input="A dog is a friendly pet if it’s trained properly";

        const output=" dog is frndly pt f t's trned prprly";

        expect(removeVowels(input)).not.toMatch(/[aeiouyAEIOUY]/)
    })
})