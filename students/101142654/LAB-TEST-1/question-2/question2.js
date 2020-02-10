const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message' : 'delaye success'}
            resolve(console.log(success))
        }, 500);
        reject(console.log("error"))
    });

}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        let exception = {'error' : 'delayed exception'}
        try {
            resolve(console.log(exception))
        } catch (e) {
            console.error(e);
        }
        reject(console.log("error"))
    });
}

rejectedPromise()
resolvedPromise()

