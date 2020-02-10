const mixedArray = ['PIZZA', 10, true, 25, false, 'WINGS'];

function lowerCaseWords(arrayIn) {
    let promise = new Promise((resolve, reject) => {
        if (arrayIn.length == 0) { reject(Error('array contains no elements')); }

        let arrayOut = arrayIn.filter(element => 
            typeof element === 'string')
            .map(word =>  word.toLowerCase());

        resolve(arrayOut);
    });

    return promise;
}

lowerCaseWords(mixedArray).then(result => console.log(result));