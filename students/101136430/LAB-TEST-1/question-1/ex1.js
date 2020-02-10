//My Thuy Trang Le - 101136430

const makelowerCase = item => { return item.toLowerCase(); }

const lowerCaseWords = (array) =>
    new Promise((resolve, reject) => {
        if (array) {
            const result = array.filter(word => typeof word === 'string');
            resolve(result.map(makelowerCase))
        } else {
            reject("Error!")
        }
    })

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error))