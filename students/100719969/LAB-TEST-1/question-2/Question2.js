let resolvedPromise  = new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve("message: delayed success!")
    }, 500) 
  }) 
  
let rejectedPromise   = new Promise((resolve, reject) => {
setTimeout( function() {
    reject("error: delayed exeption!")
}, 500)
}) 

rejectedPromise.catch((errorMessage) => {
    console.log(errorMessage)
});

resolvedPromise.then((successMessage) => {
    console.log(successMessage) 
});