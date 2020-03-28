const capitalize = wordArr => {
    return new Promise((resolve, reject) => {
        if (
            wordArr.every(word => {
                return typeof word === 'string';
            })
        ) {
            resolve(
                sortWords(
                    wordArr.map(word => {
                        return word.toUpperCase();
                    })
                )
            );
        } else {
            reject('Error: Not all items in the array are strings!');
        }
    });
};

const sortWords = wordArr => {
    return new Promise((resolve, reject) => {
        if (wordArr) {
            resolve(wordArr.sort());
        } else {
            reject('Error: Not all items in the array are strings!');
        }
    });
};


//testing the output
const nonStrings = [1, 'tiny', true];
const strings = ['jazz', 'clay', 'TinY'];

capitalize(strings)
    .then(sortWords(strings))
    .then(result => console.log(result))
    .catch(error => console.log(error));

capitalize(nonStrings)
    .then(sortWords(nonStrings))
    .then(result => console.log(result))
    .catch(error => console.log(error));