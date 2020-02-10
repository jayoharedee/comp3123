const wordArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = function(wordArray) {
    return new Promise (function(resolve, reject) {

    const result = []

    wordArray.array.forEach(element => {
        if(typeof element === 'string' || element instanceof String){
            result.push(element.toLocaleLowerCase('en-US'))
        }
    });
    
    resolve(result)

    })
}

lowerCaseWords(wordArray).then(function (resolve) {
    console.log(resolve);
}).catch(function (reject) {
    console.log(reject);
})
