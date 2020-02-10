//My Thuy Trang Le - 101136430

const resolvedPromise = () => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' })
        }, 500)
    })
    return p
}

const rejectedPromise = () => {
    const p = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve({ 'error': 'delayed exception!' });
            } catch (e) {
                console.error(e)
            }
        }, 500)
    })
    return p
}

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error))