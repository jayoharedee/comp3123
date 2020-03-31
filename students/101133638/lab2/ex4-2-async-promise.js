// Exercise 4: 
// Task 2.  Rewrite the delayedPromise function and create
// a new function named asyncPromise that uses the async and await keywords.  
// Async Function Reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function 

// 	Output
// ⮚ 36


const delayedPromise = (num) => new Promise((result, reject) => {
    setTimeout(() => {
        console.log('done!');
        result ( num * num);
    }, 2000);
});

async function asyncPromise(num) {
    return await delayedPromise(num);
}

asyncPromise(6)
    .then(result => console.log(result))
