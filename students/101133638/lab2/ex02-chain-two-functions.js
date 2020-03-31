// Exercise 2: 
// Write two functions that use Promises that you can chain! The first function,
// makeUpperCase(), will take in an array of words and capitalize them, 
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.
// Promise Chaining Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Output
// ['CLAY', ' JAXX', 'TINY']
// error: Not all items in the array are strings

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];

const makeUpperCase = (array) => new Promise((result, error) => {
    let check = true;
    for( i in array ) {
        if (!/^[a-zA-Z]+$/.test(array[i]) || typeof array[i] === 'boolean') {
            check = false;
        } else {
            array[i] = array[i].toUpperCase();
        }
    }
    if(check) {
        result(array);
    } else {
        error('Error: Not all items in the array are strings');   
    }
})

const sortWords = (result) => {
    return result.sort();
}

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));

makeUpperCase(mixedArray)
    .then(sortWords)
    .then((result) => console.log(result))
    .catch(error => console.log(error));

