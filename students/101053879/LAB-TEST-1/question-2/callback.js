// Bethan Morris - 101053879

const resolvedPromise = new Promise((resolve) => {

    setTimeout(() => {
        resolve('Message: delayed resolve!');
    }, 500);

})

const rejectedPromise = new Promise((reject) => {

    setTimeout(() => {
        reject(new Error('Error: delayed exception!'))
    }, 500)

})

resolvedPromise.then(function(result) {
    console.log(result)
});

rejectedPromise.then(function(err) {
    console.log(err);
})