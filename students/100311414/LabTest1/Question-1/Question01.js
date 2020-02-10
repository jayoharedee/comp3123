const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        const words = mixedArray.filter(word => typeof word === 'string');
        if (words.length != 0) {

            resolve(words)
        } else {
            reject('Error: No string element in the mixedArray!')
        }       
    }
    )
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'wings']

console.log(lowerCaseWords(mixedArray))