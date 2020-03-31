// Exercise 3: 
// Use the Promise.all syntax to resolve all three promises below and return 
// a new promise. Call the function and use the thenable .then() keyword to output 
// the result.
// Promise.all() Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

// output:
// [ 101, 'follow the white', 'rabbit.. neo' ]

var promise1 = 101;
var promise2 = 'follow the white';
var promise3 = new Promise((resolve, reject ) => {
    resolve( 'rabbit.. neo');
});

Promise.all([promise1, promise2, promise3])
    .then( (values) => {
        console.log(values);
    });
