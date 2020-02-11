const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }
    }, 500)
}

// delayedSuccess()
// delayedException()


const resolvedPromise = () => {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(console.log('resolved promise!'))
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(console.log('rejected promise!'))
        }, 500)
    })
}


resolvedPromise()
rejectedPromise()