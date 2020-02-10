const resolvedPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({'message':'delayed success!'})
        }, 500)
    })
}
const rejectedPromise = () => {
    return new Promise(reject => {
        setTimeout(() => {
            reject({'error':'delayed exception!'})
        },500)
    })
}

resolvedPromise().then(results => console.log(results))
                 .catch(error => console.log(error))
rejectedPromise().then(results => console.log(results))
                 .catch(error => console.log(error))
