const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('delayed success!')
        }, 500)
    });
}


const rejectedPromise = () => {
    return new Promise((reject) => {
        setTimeout(() => {
            reject ('Error: delayed exception!')
        },500)
    });
}

resolvedPromise().then(response => console.log(response)) 
rejectedPromise().then(reject => console.log(reject))