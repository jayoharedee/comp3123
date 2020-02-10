const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        result = []
        if(arr){
            filter = arr.filter(element => typeof(element) === 'string')
            filter.forEach(element => {
               result.push(element.toLowerCase())
            });
            resolve(result)
        }else{
            reject(new Error('Invalid Input'))
        }
    })
}
lowerCaseWords(mixedArray)
.then(result => console.log(result))
.catch(err => console.log(err.message))