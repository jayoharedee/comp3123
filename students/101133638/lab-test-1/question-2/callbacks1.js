// Question 2: Promises

// Given the script file callbacks.js, write a script that does the following:
// - Create a method resolvedPromise that is similar to delayedSuccess and resolves a message after a timeout of 500ms.
// - Create a method rejectedPromise that is similar to delayedException and rejects an error message after a timeout of 500ms.
// - Call both promises separately and handle the resolved and reject results and then output to the console

const delayedPromise = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num * num)
        }, 500);
    });
}

const delayedPromise2 = async (num) => {
    let promise = await new Promise((resolve, reject) => {
        var result = setTimeout(() => {
            resolve(num * num);
        }, 500);
    });
    return promise
}

Promise.all([delayedPromise(6), delayedPromise2(7)])
    .then(array => {
        console.log(array);
    });