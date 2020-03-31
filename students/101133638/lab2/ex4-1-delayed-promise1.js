// Exercise 4: 
// Recall the delayed function using setTimeout
// Task 1. Rewrite the function and name it delayedPromise,
// so that it uses a Promise. Resolving new function in the in the 
// following way returns an output of 25
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// Output
// ⮚ 25

const delayedPromise = (num) => new Promise((result, reject) => {
    setTimeout(() => {
        console.log('done!');
        result ( num * num);
    }, 500);
});

delayedPromise(5)
    .then(result => console.log(result))
