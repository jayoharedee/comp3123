const lowerCaseWords = function(words) {
    return new Promise((resolve, reject) => {

        let strings = []
        for (word of words) {
            if (typeof(word) === 'string'){
                strings.push(word.toLowerCase());
            }
        }

        if (strings.length > 0){
            resolve(strings);
        }
        else{
            reject('Error: no strings exist within the passed parameters.');
        }

    })
}

const array = ['PIZZA', 10, true, 25, false, 'Wings']


lowerCaseWords(array)
    .then((result) => console.log(result))
    .catch(error => console.log(error))