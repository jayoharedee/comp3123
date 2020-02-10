// Question 1: ES6 Features
// Create a script with a function named lowerCaseWords that takes a mixed array as input. 
// The function will do the following.
// return a promise that is resolved or rejected
// filter the non-strings and lower case the remaining words

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const newArray = [];

const lowerCaseWord = (array) => new Promise((result, error) => {

    for (i in array) {
        if (/^[a-zA-Z.]+$/.test(array[i]) && typeof array[i] != 'boolean') {
            newArray.push(array[i].toLowerCase());
        }
    }
    result(newArray);
})

lowerCaseWord(mixedArray)
    .then((result) => console.log(result));

