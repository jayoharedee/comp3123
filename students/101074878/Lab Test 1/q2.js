const resolvedPromise = new Promise ((resolve, reject) => {
    setTimeout( function() {
        resolve('message: promise was successfully delayed!')
    }, 500)
})

const rejectedPromise = new Promise((resolve, reject) => {
    setTimeout( function() {
        resolve('error: promise failed to delay')
    })
})

resolvedPromise.then((successMessage) => {
    console.log(successMessage)
});

rejectedPromise.catch((errorMessage) => {
    console.log(errorMessage)
});