
// Exercise 1: 
// Write a function compareNumToTen that takes a number as an argument and returns 
// a Promise that tests and rejects if the value is less than or resolves if greater than the value 10.
// Output
// 15 is greater than 10, success!
// 8 is less than 10, error!  

const compareNumToTen = (number) => new Promise((result, error) => {
    if (number > 10) {
        result(number + ' is greater than 10')
    }
    error('Error: ' + number + ' is less than 10')
})

const onResult = (resultValue) => console.log(resultValue);
const onError = (errorValue) => console.log(errorValue);

compareNumToTen(8)
    .then(onResult)
    .catch(onError);
