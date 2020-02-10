const resolvedPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                { 'Message': 'Delayed success' })
        }, 500)
    })
    return promise
}

const rejectedPromise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            try { 
                resolve(
                    { 'Error': 'Delayed exception' });
            } catch (e) {
                console.log(e)
            }
        }, 500)
    })
    return promise
}

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))