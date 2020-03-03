const resolvedPromise  = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved promise!')
        }, 500)
    })
}

const rejectedPromise  = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject('rejected promise!')
        }, 500)
    })
}

resolvedPromise().then(response => console.log(response)) 
rejectedPromise().then(reject => console.log(reject))