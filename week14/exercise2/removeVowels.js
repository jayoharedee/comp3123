function removeVowels(input){
    return input.replace(/[aeiouyAEIOUY]/g, '');
}

module.exports = removeVowels