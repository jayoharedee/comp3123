const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('message: delayed success!');
        }, 500)
    })
}

const delayedException = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject('error: delayed exception!');
        }, 500)
    })
}

resolvedPromise()
.then(result => console.log(result))
.catch(error => console.log(error));

delayedException()
.then(result => console.log(result))
.catch(error => console.log(error));