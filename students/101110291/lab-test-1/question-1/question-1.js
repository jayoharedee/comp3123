const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        let strArray = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof(arr[i]) == 'string') {
                strArray.push(arr[i].toLowerCase())
            }
        }
        if (strArray.length != 0) {
            resolve(strArray)
        } else {
            reject('No strings')
        }
    })
}

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));