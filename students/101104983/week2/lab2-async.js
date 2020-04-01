// Exercise 1: Write a function compareNumToTen that takes a number as an argument and returns a Promise that tests and rejects if the value is less than or resolves if greater than the value 10.

const compareNumToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + ' is greater than 10, success!');
        }
        if (num < 10) {
            reject(num + ' is less than 10, error!');
        }
    });
}

compareNumToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareNumToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

console.log('');

//Exercise 2: Write two functions that use Promises that you can chain! The first function, makeUpperCase(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
const makeUpperCase = (words) => {
    return new Promise((resolve, reject) => {
        output = []
        for (word of words) {
            if (typeof word !== 'string') {
                reject('Not all items in the array are strings!');
            }
            output.push(word.toUpperCase());
        }
        resolve(output);
    });
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        resolve(words.sort());
    });
}

const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true]

makeUpperCase(arrayOfNames)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeUpperCase(mixedArray)
    .then(sortWords)
    .then(result => console.log(result))
    .catch(error => console.log(error))

console.log('');

// Exercise 3: Use the Promise.all syntax to resolve all three promises below and return a new promise. Call the function and use the thenable .then() keyword to output the result.
var promise1 = 101;
var promise2 = "follow the white"
var promise3 = new Promise(function(resolve, reject) {
    resolve("rabbit..neo");
})


const resolveAll = () => {
    const resProm = new Promise(function (resolve, reject) {
        return Promise.all([promise1, promise2, promise3])
            .then((values) => console.log(values));
    })
    return resProm;
} 

resolveAll();

// Exercise 
// Task 1. Rewrite the function and name it delayedPromise, so that it uses a Promise. Resolving new function in the in the following way returns an output of 25
// Task 2.  Rewrite the delayedPromise function and create a new function named asyncPromise that uses the async and await keywords.  

const delayedMultiply = (num) => {
    setTimeout(() => {
        console.log("done!")
        return num *  num;
    }, 500)
}


const delayedPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num *  num);
        }, 500)
    });
}

const asyncPromise = async (num) => {
    return  new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(num *  num);
        }, 500)
    });
}

delayedMultiply(30)

delayedPromise(5)
    .then(result => console.log(result))

asyncPromise(6)
    .then(result => console.log(result))