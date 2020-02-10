const resolvedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success);
    }, 500)
})

const rejectedPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let fail = { 'error': 'delayed exception!'};
        reject(fail);                        
    }, 500)
})

resolvedPromise
    .then(result => console.log(result))
    .catch(err => console.log(err));

rejectedPromise
    .then(result => console.log(result))
    .catch(err => console.log(err));