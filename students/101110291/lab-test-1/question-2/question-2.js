
const resolvedPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
    }, 500)
})

const rejectPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception!');
        }   catch (e) {
            console.error(e)
        }
    }, 500)
})

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

rejectPromise()
    .then(result => console.log(result))
    .then(error => console.log(error));