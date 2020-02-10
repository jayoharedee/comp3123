const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (array) => {
    return new Promise((resolve, reject) => {
        var arr = array.filter( a => 
            typeof a === 'string');
        resolve(arr.map(word => { 
            return word.toLowerCase();
        }))
        reject("array has error")
    })
}
    
lowerCaseWords(mixedArray)
    .then((result) => console.log(result))
    .catch(error => console.log(error))
