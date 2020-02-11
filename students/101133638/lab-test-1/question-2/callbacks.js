// Question 2: Promises
// Given the script file callbacks.js, write a script that does the following:
// - Create a method resolvedPromise that is similar to delayedSuccess and resolves
//   a message after a timeout of 500ms.
// - Create a method rejectedPromise that is similar to delayedException and 
//   rejects an error message after a timeout of 500ms.
// - Call both promises separately and handle the resolved and reject results and
//   then output to the console

const delayedSuccess = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ 'message': 'delayed sucess!' })
    }, 500)
});

const delayedException = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve({ 'error': 'delayed exception!' })
        }
        catch (error) {
            reject(error);
        }
    }, 500)

});

delayedSuccess()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));

delayedException()
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));