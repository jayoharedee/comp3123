const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']


const lowerCaseWords = mixedArray => {
    return new Promise(function(resolve, reject){
        if (mixedArray) {
            resolve(mixedArray.filter(n => typeof n === 'string')
            .map(n => n.toLowerCase()))
        }
        else {
            reject(console.log("error"))
        }
    })
}

lowerCaseWords(mixedArray).then(result => console.log(result)).catch(error => console.log(error));