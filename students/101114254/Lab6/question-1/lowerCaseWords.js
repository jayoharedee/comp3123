const lowerCaseWords = function(words) {
    return new Promise((resolve, reject) =>
    {
        let mixedArray = [];

        for (word of words) {
            if (typeof(word) === 'string'){
                mixedArray.push(word.toLowerCase());
            }
        }

        if (mixedArray.length > 0){
            resolve(mixedArray);
        }
        else{
            reject('Error: no strings exist within the passed parameters.');
        }
    });
}


/* Below used for my own personal testing ->
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then((result) => console.log("mixed array: ", result)).catch(error=>console.log(error))

*/