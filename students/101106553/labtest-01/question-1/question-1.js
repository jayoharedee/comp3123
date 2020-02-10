const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        let words = array.filter(word =>
            typeof word === 'string'
        );

        if (Array.isArray(words) && words.length){
            const lowerWords = words.map(word => word.toLowerCase())
            resolve(console.log(lowerWords))
        } else {
            reject('Error: there were no words in the array!')
        } 
    })
}
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)
